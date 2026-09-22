"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
} from "@/components/component-x/slider";

export function SliderPreview() {
  return (
    <div className="w-full h-full p-2">
      <Slider className="w-full h-full flex flex-col">
        <SliderContent className="flex-1">
          <SliderItem className="flex items-center justify-center border h-full">
            <span className="text-2xl text-foreground">Slide 1</span>
          </SliderItem>
          <SliderItem className="flex items-center justify-center border h-full">
            <span className="text-2xl text-foreground">Slide 2</span>
          </SliderItem>
          <SliderItem className="flex items-center justify-center border h-full">
            <span className="text-2xl text-foreground">Slide 3</span>
          </SliderItem>
        </SliderContent>
        <SliderIndicatorDots />
      </Slider>
    </div>
  );
}
