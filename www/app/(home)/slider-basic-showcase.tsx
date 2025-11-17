"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
} from "@/components/component-x/slider";
import { SliderShowcaseCard } from "./slider-showcase-card";

export function SliderBasicShowcase() {
  return (
    <SliderShowcaseCard
      title="Basic Slider"
      description="Simple carousel with dot indicators"
      docsLink="/docs/components/slider"
      actionLink="/slider/basic"
      variant="compact"
    >
      <div className="w-full h-full">
        <Slider className="w-full h-full flex flex-col">
          <SliderContent className="flex-1">
            <SliderItem className="flex items-center justify-center border bg-muted/25">
              <span className="text-xl font-medium">Slide 1</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center border bg-muted/25">
              <span className="text-xl font-medium">Slide 2</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center border bg-muted/25">
              <span className="text-xl font-medium">Slide 3</span>
            </SliderItem>
          </SliderContent>
          <SliderIndicatorDots className="p-4" />
        </Slider>
      </div>
    </SliderShowcaseCard>
  );
}
