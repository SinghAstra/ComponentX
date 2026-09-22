"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorLabels,
  SliderItem,
} from "@/components/component-x/slider";

export function SliderLabelIndicators() {
  return (
    <div className="w-full h-full">
      <Slider className="w-full h-full overflow-hidden border flex flex-col">
        <SliderContent className="flex-1">
          <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
            <span className="text-2xl text-foreground">First</span>
          </SliderItem>
          <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
            <span className="text-2xl text-foreground">Second</span>
          </SliderItem>
          <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
            <span className="text-2xl text-foreground">Third</span>
          </SliderItem>
          <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
            <span className="text-2xl text-foreground">Fourth</span>
          </SliderItem>
        </SliderContent>
        <div className="flex justify-center p-2">
          <SliderIndicatorLabels
            classNameButton="hover:text-foreground transition-all duration-300"
            labels={["First", "Second", "Third", "Fourth"]}
          />
        </div>
      </Slider>
    </div>
  );
}
