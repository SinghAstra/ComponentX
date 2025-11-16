'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { CloudUpload, Link2, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export type UploadItem =
  | { type: 'file'; file: File }
  | { type: 'link'; url: string; displayUrl: string };

function getFileKey(f: File) {
  return `${f.name}-${f.size}-${f.lastModified}`;
}

function getLinkKey(url: string) {
  return `link-${url}`;
}

function formatSize(bytes: number) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${(bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`;
}

type Accept = string | string[];

export type FileOrLinkUploadProps = {
  accept?: Accept;
  maxFiles?: number;
  maxSize?: number;
  linkValidator?: (url: string) => boolean | string;
  value?: UploadItem[];
  onChange?: (items: UploadItem[]) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  description?: string;
  onReject?: (rejections: { item: File | string; reason: string }[]) => void;
};

export function FileOrLinkUpload({
  accept,
  maxFiles = 10,
  maxSize = 5 * 1024 * 1024,
  value,
  onChange,
  disabled,
  className,
  label = 'Upload files or paste links',
  description = 'Drag and drop files, click to browse, or paste a link.',
  onReject,
  linkValidator = (url) =>
    url.startsWith('http://') || url.startsWith('https://')
      ? true
      : 'Invalid URL format',
}: FileOrLinkUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [internalItems, setInternalItems] = useState<UploadItem[]>([]);
  const items = value ?? internalItems;

  const [urlInput, setUrlInput] = useState('');
  const [showUrlInput, setShowUrlInput] = useState(false);

  const setFilesAndLinks = useCallback(
    (next: UploadItem[]) => {
      if (onChange) onChange(next);
      else setInternalItems(next);
    },
    [onChange],
  );

  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});
  useEffect(() => {
    const urls: Record<string, string> = {};
    const currentFileUrls = items.filter(
      (item) => item.type === 'file' && item.file.type.startsWith('image/'),
    );
    for (const item of currentFileUrls) {
      if (item.type === 'file') {
        urls[getFileKey(item.file)] = URL.createObjectURL(item.file);
      }
    }
    setPreviewUrls(urls);
    return () => {
      Object.values(urls).forEach((u) => URL.revokeObjectURL(u));
    };
  }, [items]);

  const normalizeAccept = useMemo(() => {
    if (!accept) return undefined;
    const arr = Array.isArray(accept) ? accept : [accept];
    return arr.map((a) => a.trim()).filter(Boolean);
  }, [accept]);

  const acceptAttr = useMemo(() => {
    if (!normalizeAccept) return undefined;
    return normalizeAccept.join(',');
  }, [normalizeAccept]);

  const isAccepted = useCallback(
    (f: File) => {
      if (!normalizeAccept || normalizeAccept.length === 0) return true;
      return normalizeAccept.some((rule) => {
        if (rule.endsWith('/*')) {
          const base = rule.slice(0, -1);
          return f.type.startsWith(base);
        }
        if (rule.startsWith('.')) {
          return f.name.toLowerCase().endsWith(rule.toLowerCase());
        }
        return f.type === rule;
      });
    },
    [normalizeAccept],
  );

  const validateFiles = useCallback(
    (newFiles: File[], currentItems: UploadItem[]) => {
      const accepted: File[] = [];
      const rejections: { item: File; reason: string }[] = [];
      const existingFileKeys = new Set(
        currentItems
          .filter((item) => item.type === 'file')
          .map((item) => getFileKey(item.file)),
      );

      for (const file of newFiles) {
        const key = getFileKey(file);
        if (existingFileKeys.has(key)) {
          rejections.push({ item: file, reason: 'Duplicate file' });
          continue;
        }
        if (!isAccepted(file)) {
          rejections.push({ item: file, reason: 'File type not accepted' });
          continue;
        }
        if (file.size > maxSize) {
          rejections.push({
            item: file,
            reason: `File too large (> ${formatSize(maxSize)})`,
          });
          continue;
        }
        accepted.push(file);
      }
      return { accepted, rejections };
    },
    [isAccepted, maxSize],
  );

  const addFiles = useCallback(
    (list: FileList | null) => {
      if (!list || disabled) return;
      const newFiles = Array.from(list);
      const { accepted, rejections: fileRejections } = validateFiles(
        newFiles,
        items,
      );

      const totalItemsAfterAdd = items.length + accepted.length;
      let finalFiles = accepted;
      if (totalItemsAfterAdd > maxFiles) {
        const allowedToAdd = Math.max(0, maxFiles - items.length);
        finalFiles = accepted.slice(0, allowedToAdd);
        accepted.slice(allowedToAdd).forEach((file) => {
          fileRejections.push({
            item: file,
            reason: `Too many items (max ${maxFiles})`,
          });
        });
      }

      if (fileRejections.length && onReject)
        onReject(fileRejections as { item: File | string; reason: string }[]);
      if (!finalFiles.length) return;

      const newItems: UploadItem[] = finalFiles.map((file) => ({
        type: 'file',
        file,
      }));
      const next = [...items, ...newItems];
      setFilesAndLinks(next);
    },
    [disabled, items, maxFiles, onReject, setFilesAndLinks, validateFiles],
  );

  const handleUrlSubmit = () => {
    const url = urlInput.trim();
    if (!url) {
      if (onReject) onReject([{ item: '', reason: 'Please enter a URL' }]);
      return;
    }

    const validationResult = linkValidator(url);
    if (validationResult !== true) {
      if (onReject)
        onReject([{ item: url, reason: validationResult as string }]);
      return;
    }

    if (items.length >= maxFiles) {
      if (onReject)
        onReject([{ item: url, reason: `Too many items (max ${maxFiles})` }]);
      return;
    }

    const existingLinkKeys = new Set(
      items
        .filter((item) => item.type === 'link')
        .map((item) => getLinkKey(item.url)),
    );

    const key = getLinkKey(url);
    if (existingLinkKeys.has(key)) {
      if (onReject) onReject([{ item: url, reason: 'Duplicate link' }]);
      return;
    }

    const newItem: UploadItem = {
      type: 'link',
      url,
      displayUrl: url.length > 50 ? url.substring(0, 47) + '...' : url,
    };
    setFilesAndLinks([...items, newItem]);
    setUrlInput('');
    setShowUrlInput(false);
  };

  const handleBrowseClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    addFiles(e.target.files);
    if (inputRef.current) inputRef.current.value = '';
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    addFiles(e.dataTransfer.files);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const removeItem = (key: string) => {
    const next = items.filter((item) => {
      if (item.type === 'file') return getFileKey(item.file) !== key;
      if (item.type === 'link') return getLinkKey(item.url) !== key;
      return true;
    });
    setFilesAndLinks(next);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleBrowseClick();
    }
  };

  return (
    <div className={cn('w-full', className)}>
      <label className="block text-sm font-medium text-foreground mb-2">
        {label}
      </label>
      <div
        role="button"
        tabIndex={disabled ? -1 : 0}
        aria-disabled={disabled}
        aria-label={label}
        onKeyDown={onKeyDown}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        className={cn(
          'relative flex flex-col items-center justify-center rounded border border-dashed p-6 transition-all duration-300',
          'bg-background text-foreground',
          'outline-none',
          isDragging ? 'ring-1 ring-offset-2 ring-primary' : 'ring-0',
          disabled
            ? 'opacity-60 cursor-not-allowed'
            : 'cursor-pointer hover:bg-muted/30',
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept={acceptAttr}
          multiple
          onChange={onInputChange}
          className="sr-only"
          aria-hidden="true"
          tabIndex={-1}
          disabled={disabled || items.length >= maxFiles}
        />
        <div className="flex flex-col items-center gap-2 text-center">
          <div
            className={cn(
              'mx-auto h-12 w-12 rounded flex items-center justify-center',
              isDragging
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground',
            )}
            aria-hidden="true"
          >
            <CloudUpload />
          </div>
          <p className="text-sm">{description}</p>
          <div className="text-xs text-muted-foreground">
            <span>
              {'Max items: '}
              {maxFiles}
            </span>
            <span>
              {' • Max size per file: '}
              {formatSize(maxSize)}
            </span>
          </div>

          <div className="mt-2 flex gap-2">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer bg-transparent font-normal hover:bg-muted/20 transition-all duration-300"
              disabled={disabled || items.length >= maxFiles}
              onClick={(e) => {
                e.stopPropagation();
                handleBrowseClick();
              }}
            >
              Browse files
            </Button>
            <Button
              type="button"
              variant="outline"
              className="font-normal hover:bg-muted/20 transition-all duration-300 cursor-pointer rounded"
              disabled={disabled || items.length >= maxFiles}
              onClick={(e) => {
                e.stopPropagation();
                setShowUrlInput(!showUrlInput);
              }}
            >
              Paste URL
            </Button>
          </div>

          {showUrlInput && (
            <div
              className="flex gap-2 pt-2 w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <Input
                placeholder="Enter link (e.g., website, drive link)"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleUrlSubmit()}
                className="text-sm rounded"
              />
              <Button
                type="button"
                className="rounded"
                onClick={handleUrlSubmit}
              >
                Add
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Previews & Links */}
      {items.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => {
            const key =
              item.type === 'file'
                ? getFileKey(item.file)
                : getLinkKey(item.url);

            return (
              <div
                key={key}
                className={cn(
                  'relative rounded border h-24 overflow-hidden',
                  item.type === 'file' && item.file.type.startsWith('image/')
                    ? 'p-0'
                    : 'flex items-center justify-start p-3',
                )}
              >
                {item.type === 'file' ? (
                  item.file.type.startsWith('image/') && previewUrls[key] ? (
                    <Image
                      src={previewUrls[key]}
                      alt={`${item.file.name} preview`}
                      fill
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="text-sm space-y-1 overflow-hidden">
                      <p className="font-medium truncate">{item.file.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {formatSize(item.file.size)}
                      </p>
                    </div>
                  )
                ) : (
                  <Link
                    href={item.url}
                    target="_blank"
                    className="flex items-center space-x-2 text-sm text-primary hover:underline"
                    onClick={(e) => e.stopPropagation()} // Prevent parent click handler
                  >
                    <Link2 className="w-4 h-4 shrink-0" />
                    <span className="truncate">{item.displayUrl}</span>
                  </Link>
                )}

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="shrink-0 z-[9] absolute top-1 right-1 transition-all duration-300 hover:bg-muted/10 bg-background/50 rounded-full h-7 w-7 p-0"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeItem(key);
                  }}
                >
                  <span className="sr-only">
                    {'Remove '}
                    {item.type === 'file' ? item.file.name : item.url}
                  </span>
                  <X className="w-4 h-4" />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
