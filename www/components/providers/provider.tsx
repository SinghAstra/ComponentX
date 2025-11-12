import MaskedGridBackground from "@/components/component-x/masked-grid-background";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import React, { ReactNode, Suspense } from "react";
import { SidebarProvider } from "../ui/sidebar";
import { ToastProvider } from "./toast";

interface ProviderProps {
  children: ReactNode;
}

const LoadingFallback = () => {
  return (
    <div className="min-h-screen flex flex-col gap-4 items-center text-center justify-center relative overflow-hidden px-4">
      <MaskedGridBackground />
      <div className="flex gap-4">
        <Image
          src={"/favicon.ico"}
          width={48}
          height={48}
          alt={siteConfig.name}
        />
        <p className="text-5xl tracking-wide">{siteConfig.name}</p>
      </div>
      <p className="text-xl tracking-wide text-muted-foreground">
        {siteConfig.description}
      </p>
    </div>
  );
};

const Providers = ({ children }: ProviderProps) => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <SidebarProvider>
        <ToastProvider>{children}</ToastProvider>
      </SidebarProvider>
    </Suspense>
  );
};

export default Providers;
