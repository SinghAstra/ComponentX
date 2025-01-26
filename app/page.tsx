import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Rocket } from "lucide-react";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-2">
      <h1 className="text-6xl">{siteConfig.name}</h1>
      <p>{siteConfig.description}</p>
      <div className="flex gap-4">
        <Link href="/docs">
          <Button variant={"outline"}>
            Docs <Rocket className="h-5 w-5" />
          </Button>
        </Link>
        <a href={siteConfig.links.github} target="_blank">
          <Button variant={"outline"}>
            Github <Icons.gitLogo className="h-5 w-5" />
          </Button>
        </a>
      </div>
    </div>
  );
};

export default HomePage;
