"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorLabels,
  SliderItem,
} from "@/components/component-x/slider";

export function SliderLabelIndicators() {
  return (
    <div className="w-full space-y-4">
      <div className="relative w-full h-64 bg-gradient-to-b from-muted to-background rounded-lg overflow-hidden border">
        <Slider className="h-full">
          <SliderContent>
            <SliderItem className="bg-primary/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Spring</span>
            </SliderItem>
            <SliderItem className="bg-secondary/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Summer</span>
            </SliderItem>
            <SliderItem className="bg-accent/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Autumn</span>
            </SliderItem>
            <SliderItem className="bg-destructive/20 flex items-center justify-center">
              <span className="text-2xl text-foreground">Winter</span>
            </SliderItem>
          </SliderContent>
          <div className="flex justify-center">
            <SliderIndicatorLabels
              labels={["Spring", "Summer", "Autumn", "Winter"]}
            />
          </div>
          s
        </Slider>
      </div>
    </div>
  );
}
