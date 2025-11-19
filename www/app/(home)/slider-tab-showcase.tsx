"use client";

import {
  Slider,
  SliderContent,
  SliderItem,
  SliderNav,
  SliderNavTrigger,
} from "@/components/component-x/slider";
import { ComponentShowcase } from "./component-showcase";

export function SliderTabShowcase() {
  return (
    <ComponentShowcase
      docsLink="/docs/components/slider#with-tab-navigation"
      variant="compact"
    >
      <div className="w-full h-full">
        <Slider className="flex flex-col h-full w-full rounded">
          <SliderNav>
            <SliderNavTrigger>Featured</SliderNavTrigger>
            <SliderNavTrigger>Popular</SliderNavTrigger>
            <SliderNavTrigger>Recent</SliderNavTrigger>
          </SliderNav>
          <SliderContent className="flex-1">
            <SliderItem className="flex items-center justify-center bg-muted/25 h-full border-r">
              <span>Featured Content</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center bg-muted/25 h-full border-r">
              <span>Popular Content</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center bg-muted/25 h-full border-r">
              <span>Recent Content</span>
            </SliderItem>
          </SliderContent>
        </Slider>
      </div>
    </ComponentShowcase>
  );
}
