"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
  SliderNavigation,
} from "@/components/component-x/slider";
import { SliderShowcaseCard } from "./slider-showcase-card";

export function SliderNavigationShowcase() {
  return (
    <SliderShowcaseCard
      title="With Navigation"
      description="Slider with prev/next buttons"
      docsLink="/docs/components/slider#with-navigation-buttons"
      variant="compact"
    >
      <div className="w-full h-full">
        <Slider className="h-full flex flex-col w-full rounded border">
          <SliderContent className="flex-1">
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full">
              <span className="text-xl font-medium">Slide 1</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full">
              <span className="text-xl font-medium">Slide 2</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full">
              <span className="text-xl font-medium">Slide 3</span>
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
    </SliderShowcaseCard>
  );
}
