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
    <div className="w-full h-full">
      <Slider className="h-full flex flex-col">
        <SliderContent className="flex-1">
          <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
            <span className="text-2xl text-foreground">Slide 1</span>
          </SliderItem>
          <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
            <span className="text-2xl text-foreground">Slide 2</span>
          </SliderItem>
          <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
            <span className="text-2xl text-foreground">Slide 3</span>
          </SliderItem>
        </SliderContent>
        <div className="flex items-center justify-between p-2">
          <div className="flex-1 flex justify-center items-center">
            <SliderIndicatorDots />
          </div>
          <SliderNavigation />
        </div>
      </Slider>
    </div>
  );
}
