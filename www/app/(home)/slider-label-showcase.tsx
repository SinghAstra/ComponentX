"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorLabels,
  SliderItem,
} from "@/components/component-x/slider";
import { SliderShowcaseCard } from "./slider-showcase-card";

export function SliderLabelShowcase() {
  return (
    <SliderShowcaseCard
      title="Label Indicators"
      description="Navigate with label indicators"
      docsLink="/docs/components/slider#label-indicators"
      variant="full"
    >
      <div className="w-full h-full">
        <Slider className="w-full h-full overflow-hidden border flex flex-col rounded">
          <SliderContent className="flex-1">
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
              <span className="text-2xl font-medium">First</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
              <span className="text-2xl font-medium">Second</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
              <span className="text-2xl font-medium">Third</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border">
              <span className="text-2xl font-medium">Fourth</span>
            </SliderItem>
          </SliderContent>
          <div className="flex justify-center p-4">
            <SliderIndicatorLabels
              classNameButton="hover:text-foreground transition-all duration-300"
              labels={["First", "Second", "Third", "Fourth"]}
            />
          </div>
        </Slider>
      </div>
    </SliderShowcaseCard>
  );
}
