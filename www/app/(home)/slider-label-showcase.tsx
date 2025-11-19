"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorLabels,
  SliderItem,
} from "@/components/component-x/slider";
import { ComponentShowcase } from "./component-showcase";

export function SliderLabelShowcase() {
  return (
    <ComponentShowcase
      docsLink="/docs/components/slider#label-indicators"
      variant="compact"
    >
      <div className="w-full h-full">
        <Slider className="w-full h-full overflow-hidden flex flex-col">
          <SliderContent className="flex-1">
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border-r">
              <span>First</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border-r">
              <span>Second</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border-r">
              <span>Third</span>
            </SliderItem>
            <SliderItem className="bg-muted/25 flex items-center justify-center h-full border-r">
              <span>Fourth</span>
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
    </ComponentShowcase>
  );
}
