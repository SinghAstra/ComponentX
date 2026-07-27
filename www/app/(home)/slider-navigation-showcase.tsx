"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
  SliderNavigation,
} from "@/components/component-x/slider";
import { ComponentShowcase } from "./component-showcase";

export function SliderNavigationShowcase() {
  return (
    <ComponentShowcase
      docsLink="/docs/components/slider#with-navigation-buttons"
      variant="compact"
    >
      <div className="w-full h-full">
        <Slider className="h-full flex flex-col w-full">
          <SliderContent className="flex-1">
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border-r">
              <span>Slide 1</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border-r">
              <span>Slide 2</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border-r">
              <span>Slide 3</span>
            </SliderItem>
          </SliderContent>
          <div className="flex items-center justify-between p-4">
            <div className="flex-1 flex justify-center items-center">
              <SliderIndicatorDots />
            </div>
            <SliderNavigation />
          </div>
        </Slider>
      </div>
    </ComponentShowcase>
  );
}
