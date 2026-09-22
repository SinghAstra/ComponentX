'use client';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ImageUp, X } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

type Accept = string | string[];

export type FileUploaderProps = {
  accept?: Accept;
  multiple?: boolean;
  maxFiles?: number;
  maxSize?: number;
  value?: File[];
  onChange?: (files: File[]) => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  description?: string;
  onReject?: (rejections: { file: File; reason: string }[]) => void;
};

export function FileUploader({
  accept,
  multiple = true,
  maxFiles = 10,
  maxSize = 5 * 1024 * 1024,
  value,
  onChange,
  disabled,
  className,
  label = 'Upload files',
  description = 'Drag and drop files here, or click to browse.',
  onReject,
}: FileUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [internalFiles, setInternalFiles] = useState<File[]>([]);
  const files = value ?? internalFiles;

  const setFiles = useCallback(
    (next: File[]) => {
      if (onChange) onChange(next);
      else setInternalFiles(next);
    },
    [onChange],
  );

  const [previewUrls, setPreviewUrls] = useState<Record<string, string>>({});
  useEffect(() => {
    const urls: Record<string, string> = {};
    for (const f of files) {
      if (f.type.startsWith('image/')) {
        urls[getFileKey(f)] = URL.createObjectURL(f);
      }
    }
    setPreviewUrls(urls);
    return () => {
      Object.values(urls).forEach((u) => URL.revokeObjectURL(u));
    };
  }, [files]);

  const handleBrowseClick = () => {
    if (disabled) return;
    inputRef.current?.click();
  };

  const normalizeAccept = useMemo(() => {
    if (!accept) return undefined;
    const arr = Array.isArray(accept) ? accept : [accept];
    return arr.map((a) => a.trim()).filter(Boolean);
  }, [accept]);

  const acceptAttr = useMemo(() => {
    if (!normalizeAccept) return undefined;
    return normalizeAccept.join(',');
  }, [normalizeAccept]);

  function formatSize(bytes: number) {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${(bytes / Math.pow(k, i)).toFixed(i === 0 ? 0 : 1)} ${sizes[i]}`;
  }

  function getFileKey(f: File) {
    return `${f.name}-${f.size}-${f.lastModified}`;
  }

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

  const validate = useCallback(
    (newFiles: File[], current: File[]) => {
      const accepted: File[] = [];
      const rejections: { file: File; reason: string }[] = [];
      const existingKeys = new Set(current.map(getFileKey));

      for (const file of newFiles) {
        const key = getFileKey(file);
        if (existingKeys.has(key)) {
          rejections.push({ file, reason: 'Duplicate file' });
          continue;
        }
        if (!isAccepted(file)) {
          rejections.push({ file, reason: 'File type not accepted' });
          continue;
        }
        if (file.size > maxSize) {
          rejections.push({
            file,
            reason: `File too large (> ${formatSize(maxSize)})`,
          });
          continue;
        }
        accepted.push(file);
      }

      let finalAccepted = accepted;
      if (multiple) {
        const total = current.length + accepted.length;
        if (total > maxFiles) {
          const allowed = Math.max(0, maxFiles - current.length);
          finalAccepted = accepted.slice(0, allowed);
          accepted.slice(allowed).forEach((file) => {
            rejections.push({
              file,
              reason: `Too many files (max ${maxFiles})`,
            });
          });
        }
      } else {
        finalAccepted = accepted.slice(0, 1);
        accepted.slice(1).forEach((file) => {
          rejections.push({ file, reason: 'Multiple files not allowed' });
        });
      }

      return { finalAccepted, rejections };
    },
    [isAccepted, maxFiles, maxSize, multiple],
  );

  const addFiles = useCallback(
    (list: FileList | null) => {
      if (!list) return;
      if (disabled) return;
      const newFiles = Array.from(list);
      const { finalAccepted, rejections } = validate(newFiles, files);
      if (rejections.length && onReject) onReject(rejections);
      if (!finalAccepted.length) return;

      const next = multiple ? [...files, ...finalAccepted] : finalAccepted;
      setFiles(next);
    },
    [disabled, files, multiple, onReject, setFiles, validate],
  );

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

  const removeFile = (key: string) => {
    const next = files.filter((f) => getFileKey(f) !== key);
    setFiles(next);
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
        onClick={handleBrowseClick}
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
          multiple={multiple}
          onChange={onInputChange}
          className="sr-only"
          aria-hidden="true"
          tabIndex={-1}
          disabled={disabled}
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
            <ImageUp />
          </div>
          <p className="text-sm">{description}</p>
          <div className="text-xs text-muted-foreground">
            {normalizeAccept ? (
              <span>
                {'Accepted: '}
                {normalizeAccept.join(', ')}
              </span>
            ) : (
              <span>{'Any file type'}</span>
            )}
            <span>
              {' • Max size: '}
              {formatSize(maxSize)}
            </span>
            {multiple && (
              <span>
                {' • Max files: '}
                {maxFiles}
              </span>
            )}
          </div>
          <div className="mt-2">
            <Button
              type="button"
              variant="outline"
              className="cursor-pointer bg-transparent font-normal hover:bg-muted/20 transition-all duration-300"
              disabled={disabled}
            >
              Browse files
            </Button>
          </div>
        </div>
      </div>

      {/* Previews */}
      {files.length > 0 && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {files.map((file) => {
            const key = getFileKey(file);
            const url = previewUrls[key];
            return (
              <div key={key} className="relative rounded border h-24">
                <Image
                  src={url}
                  alt={`${file.name} preview`}
                  fill
                  className="h-full w-full object-cover"
                />

                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="shrink-0 z-[9] absolute top-1 right-1 transition-all duration-300 hover:bg-muted/10"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(key);
                  }}
                >
                  <span className="sr-only">
                    {'Remove '}
                    {file.name}
                  </span>
                  <X />
                </Button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
