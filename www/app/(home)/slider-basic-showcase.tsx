"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
} from "@/components/component-x/slider";
import { ComponentShowcase } from "./component-showcase";

export function SliderBasicShowcase() {
  return (
    <ComponentShowcase docsLink="/docs/components/slider" variant="compact">
      <div className="w-full h-full">
        <Slider className="w-full h-full flex flex-col">
          <SliderContent className="flex-1">
            <SliderItem className="flex items-center justify-center bg-muted/25 h-full border-r">
              <span className="text-xl">Slide 1</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center border-r bg-muted/25 h-full">
              <span className="text-xl">Slide 2</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center border-r bg-muted/25 h-full">
              <span className="text-xl">Slide 3</span>
            </SliderItem>
          </SliderContent>
          <SliderIndicatorDots className="p-4" />
        </Slider>
      </div>
    </ComponentShowcase>
  );
}
