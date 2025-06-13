import { siteConfig } from "@/config/site";

export async function HeroContent() {
  return (
    <div className="flex flex-col items-center gap-8 text-center min-h-screen justify-center ">
      <h1 className=" max-w-3xl font-medium text-6xl text-gradient tracking-tight md:text-7xl">
        {siteConfig.name}
      </h1>
      <p className=" max-w-lg text-xl text-foreground">
        Collection of Reusable UI Components.
        <br /> Simple Copy Paste and Elevate UI.
      </p>
    </div>
  );
}
