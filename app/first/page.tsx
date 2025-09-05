import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MovingBorder from "../../components/component-x/moving-border";
import FeaturesCarousel from "./features-carousel";
import Navbar from "./navbar";
import { SecondSection } from "./second-section";
import { TestimonialsSection } from "./testimonial-section";

function FirstPage() {
  return (
    <div className="relative flex flex-col p-4">
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen text-center relative mt-20 rounded-t-xl overflow-hidden">
        <div
          className={`absolute inset-0 z-[-1] overflow-hidden bg-[url(/assets/gradient.avif)] bg-cover bg-no-repeat bg-center rounded-t-3xl`}
        ></div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl  font-bold tracking-tighter">
          This is the Hero Heading
        </h1>
        <p className="mt-2 text-lg md:text-xl lg:text-2xl">
          This is the Sub-heading,Cool right ? let me know
        </p>
        <div className="mt-8 flex gap-4">
          <div className="p-[2px] relative z-[2] overflow-hidden rounded">
            <MovingBorder color="hsl(var(--foreground))" />
            <Button
              size="lg"
              className="group rounded flex items-center gap-1 text-md font-normal"
            >
              Primary Button Text
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="p-[2px] relative z-[2] overflow-hidden rounded">
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
      <TestimonialsSection />
    </div>
  );
}

export default FirstPage;
