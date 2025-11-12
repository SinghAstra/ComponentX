"use client";

interface ComponentPreviewProps {
  children: React.ReactNode;
}

function ComponentPreview({ children }: ComponentPreviewProps) {
  return (
    <div className="flex border border-b-0 min-h-[350px] w-full items-center justify-center overflow-hidden rounded-t-md bg-muted/40 p-8">
      {children}
    </div>
  );
}

export default ComponentPreview;
