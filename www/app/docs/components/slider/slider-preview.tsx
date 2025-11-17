"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
} from "@/components/component-x/slider";

export function SliderPreview() {
  return (
    <div className="w-full space-y-4">
      <div className="relative w-full h-64 bg-gradient-to-b from-muted to-background rounded-lg overflow-hidden border">
        <Slider className="h-full">
          <SliderContent>
            <SliderItem className="bg-primary/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Slide 1</span>
            </SliderItem>
            <SliderItem className="bg-secondary/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Slide 2</span>
            </SliderItem>
            <SliderItem className="bg-accent/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Slide 3</span>
            </SliderItem>
          </SliderContent>
          <SliderIndicatorDots />
        </Slider>
      </div>
    </div>
  );
}
