import { Button } from "@/components/ui/button";
import React from "react";
import { BackgroundShine } from "../ui/background-shine";

const ButtonBackgroundShineShowCase = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-[80vw] h-[80vh] border border-border/40 relative rounded-lg overflow-hidden flex items-center justify-center">
        <Button variant={"outline"} className="relative">
          Button With Shine
          <BackgroundShine />
        </Button>
      </div>
    </div>
  );
};

export default ButtonBackgroundShineShowCase;
