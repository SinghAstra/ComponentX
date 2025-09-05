import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function SecondSection() {
  return (
    <section>
      <div className="px-6 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
              This is the Second Section Text after Hero Section
            </h1>
          </div>
          <div className="flex-shrink-0">
            <Button
              size="lg"
              className="group rounded flex items-center gap-1 text-md font-normal"
            >
              Start for free
              <ArrowRight className="ml-2 h-4 w-4 transition-all duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
