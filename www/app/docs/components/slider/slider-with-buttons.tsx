"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
  SliderNavigation,
} from "@/components/component-x/slider";

export function SliderWithButtons() {
  return (
    <div className="w-full space-y-4">
      <div className="relative w-full h-64 bg-gradient-to-b from-muted to-background rounded-lg overflow-hidden border">
        <Slider className="h-full">
          <SliderContent>
            <SliderItem className="bg-primary/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Image 1</span>
            </SliderItem>
            <SliderItem className="bg-secondary/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Image 2</span>
            </SliderItem>
            <SliderItem className="bg-accent/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Image 3</span>
            </SliderItem>
          </SliderContent>
          <div className="flex items-center justify-between">
            <div className="flex-1" />
            <SliderNavigation />
            <div className="flex-1 flex justify-end">
              <SliderIndicatorDots />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
