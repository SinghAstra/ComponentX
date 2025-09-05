import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MovingBorder from "../../components/component-x/moving-border";
import FeaturesCarousel from "./features-carousel";
import Navbar from "./navbar";
import { SecondSection } from "./second-section";

function FirstPage() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center ">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter max-w-4xl leading-tight">
          This is the Hero Heading
        </h1>
        <p className="mt-2 text-lg md:text-xl text-muted-foreground max-w-2xl">
          This is the Sub-heading
        </p>
        <div className="mt-8 flex gap-4">
          <Button
            size="lg"
            className="group rounded flex items-center gap-1 text-md font-normal"
          >
            Primary Button Text
            <ArrowRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
          </Button>
          <div className="p-[2px] relative z-[2] overflow-hidden rounded">
            <MovingBorder color="hsl(var(--foreground))" />
            <Button
              className="rounded border bg-background hover:bg-background font-normal"
              size="lg"
            >
              Secondary Button Text
            </Button>
          </div>
        </div>
      </main>
      <SecondSection />
      <FeaturesCarousel />
    </div>
  );
}

export default FirstPage;
