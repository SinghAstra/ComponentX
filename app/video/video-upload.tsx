"use client";

import type React from "react";

import { useToastContext } from "@/components/providers/toast";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { CloudUpload, ExternalLink, X } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

interface VideoUploadProps {
  maxSize?: number;
}

export function VideoUpload({ maxSize = 100 }: VideoUploadProps) {
  const [video, setVideo] = useState<{
    file?: File;
    url?: string;
    preview?: string;
  } | null>(null);
  const { setToastMessage } = useToastContext();
  const [isDragging, setIsDragging] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [showUrlInput, setShowUrlInput] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const supportedFormats = ["MP4", "MOV", "WebM", "AVI"];

  const validateFile = (file: File): boolean => {
    const validTypes = [
      "video/mp4",
      "video/quicktime",
      "video/webm",
      "video/x-msvideo",
    ];
    if (!validTypes.includes(file.type)) {
      setToastMessage(
        `Invalid file type. Supported formats: ${supportedFormats.join(", ")}`
      );
      return false;
    }

    const fileSizeMB = file.size / (1024 * 1024);
    if (fileSizeMB > maxSize) {
      setToastMessage(`File size exceeds ${maxSize}MB limit`);
      return false;
    }

    return true;
  };

  const handleFileSelect = (file: File) => {
    if (!validateFile(file)) return;

    const preview = URL.createObjectURL(file);
    setVideo({ file, preview });
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleUrlSubmit = () => {
    if (!urlInput.trim()) {
      setToastMessage("Please enter a valid URL");
      return;
    }

    setVideo({ url: urlInput });
    setUrlInput("");
    setShowUrlInput(false);
  };

  const handleClear = () => {
    setVideo(null);
    setUrlInput("");
    setShowUrlInput(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full space-y-4">
      {!video ? (
        <div
          className={`border rounded border-dashed hover:bg-muted/20 transition-all duration-300 cursor-pointer ${
            isDragging && "bg-muted/20"
          }`}
          onDragOver={(e) => {
            e.preventDefault();
            setIsDragging(true);
          }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <div className="p-12 text-center space-y-4">
            <div className="flex justify-center">
              <div className="p-3 rounded bg-muted">
                <CloudUpload className="w-6 h-6 text-muted-foreground" />
              </div>
            </div>

            <div className="space-y-2">
              <p className="font-medium text-foreground">
                <span className="text-primary">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-muted-foreground">
                MP4, MOV or URL (Youtube/Vimeo/Drive Link)
              </p>
            </div>

            <div className="flex gap-2 justify-center">
              <Button
                type="button"
                variant="outline"
                className="font-normal hover:bg-muted/20 transition-all duration-300 cursor-pointer rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  fileInputRef.current?.click();
                }}
              >
                Choose File
              </Button>
              <Button
                type="button"
                variant="outline"
                className="font-normal hover:bg-muted/20 transition-all duration-300 cursor-pointer rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowUrlInput(!showUrlInput);
                }}
              >
                Paste URL
              </Button>
            </div>

            {showUrlInput && (
              <div className="flex gap-2 pt-2">
                <Input
                  placeholder="Enter YouTube, Vimeo, or Drive link..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleUrlSubmit()}
                  className="text-sm rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                />
                <Button
                  type="button"
                  className="rounded"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleUrlSubmit();
                  }}
                >
                  Add
                </Button>
              </div>
            )}

            <input
              ref={fileInputRef}
              type="file"
              accept="video/*"
              onChange={(e) =>
                e.target.files?.[0] && handleFileSelect(e.target.files[0])
              }
              className="hidden"
            />
          </div>
        </div>
      ) : (
        <div className="p-4 border overflow-hidden">
          {video.preview && (
            <div className="relative aspect-video flex items-center justify-center">
              <video
                src={video.preview}
                className="w-full h-full object-cover rounded "
                controls
              />
            </div>
          )}

          <div className="p-4 space-y-3">
            {video.file && (
              <div className="space-y-1 flex gap-2 justify-between items-center">
                <p className="text-sm font-medium text-foreground truncate">
                  {video.file.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(video.file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            )}
            <div className="flex gap-2 ">
              {video.url && (
                <Link
                  href={video.url}
                  className={cn(
                    buttonVariants({ variant: "outline" }),
                    "w-full hover:bg-muted/20 transition-all duration-300 font-normal rounded"
                  )}
                  target="_blank"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  View Video
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              )}
              <Button
                type="button"
                variant="outline"
                className="w-full hover:bg-muted/20 transition-all duration-300 font-normal rounded"
                onClick={handleClear}
              >
                <X className="w-4 h-4 mr-2" />
                Remove Video
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
