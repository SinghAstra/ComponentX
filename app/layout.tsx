import Providers from "@/components/providers/provider";
import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Reusable UI Components"],
  authors: [
    {
      name: "SinghAstra",
      url: "https://github.com/SinghAstra",
    },
  ],
  creator: "SinghAstra",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/assets/landing.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/assets/landing.png"],
    creator: "@singhastra",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-background ">
        <Providers>
          <NextTopLoader color="hsl(var(--primary))" showSpinner={false} />
          <div className="flex items-center justify-between px-6 py-3 sticky top-0 inset-x-0 backdrop-blur-sm z-[10] bg-muted/20 h-[60px]">
            <Link href="/">
              <p className="text-xl sm:text-2xl tracking-wide">
                {siteConfig.name}
              </p>
            </Link>
            <Link href="/background">
              <p className="text-base sm:text-xl">Background</p>
            </Link>
          </div>
          {children}
          <Toaster
            theme="dark"
            toastOptions={{
              style: {
                fontFamily: "Space Grotesk, monospace",
                background: "hsl(var(--muted) / 0.2)",
                color: "hsl(var(--foreground))",
                border: "1px solid hsl(var(--border))",
                letterSpacing: "0.05em",
                fontSize: ".95rem",
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
