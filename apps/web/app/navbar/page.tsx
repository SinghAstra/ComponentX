import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ConicBackground from "../ui/conic-background";
import MovingBorder from "../ui/moving-border";
import Navbar from "./navbar";
function NavbarShowCase() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="flex flex-col items-center justify-center px-4 min-h-screen text-center relative">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight">
          Design, prototype, and publish it with Framer
        </h1>
        <p className="mt-2 text-lg md:text-xl text-muted-foreground max-w-2xl">
          The website builder loved by designers.
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            size="lg"
            className="group rounded relative flex items-center gap-1 text-md font-normal backdrop-blur-md  "
          >
            Get Started
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
          </Button>
          <div className="p-[2px] relative z-[2] overflow-hidden rounded">
            <MovingBorder color="hsl(var(--foreground))" />
            <Button className="rounded bg-background" size="lg">
              Watch video
            </Button>
          </div>
        </div>
        <ConicBackground backgroundSpan="medium" />
      </main>
    </div>
  );
}

export default NavbarShowCase;
