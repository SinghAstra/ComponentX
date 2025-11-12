"use client";

interface ComponentPreviewProps {
  children: React.ReactNode;
}

function ComponentPreview({ children }: ComponentPreviewProps) {
  return (
    <div className="flex border border-b-0 h-[350px] overflow-hidden w-full items-center justify-center rounded-t-md bg-muted/40">
      {children}
    </div>
  );
}

export default ComponentPreview;
