"use client";

import {
  Slider,
  SliderContent,
  SliderItem,
  SliderNav,
  SliderNavTrigger,
} from "@/components/component-x/slider";
import { SliderShowcaseCard } from "./slider-showcase-card";

export function SliderTabShowcase() {
  return (
    <SliderShowcaseCard
      docsLink="/docs/components/slider#with-tab-navigation"
      variant="compact"
    >
      <div className="w-full h-full">
        <Slider className="border flex flex-col h-full w-full rounded">
          <SliderNav className="border-b">
            <SliderNavTrigger>Featured</SliderNavTrigger>
            <SliderNavTrigger>Popular</SliderNavTrigger>
            <SliderNavTrigger>Recent</SliderNavTrigger>
          </SliderNav>
          <SliderContent className="flex-1">
            <SliderItem className="flex items-center justify-center bg-muted/25 h-full border">
              <span className="text-lg font-medium">Featured Content</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center bg-muted/25 h-full border">
              <span className="text-lg font-medium">Popular Content</span>
            </SliderItem>
            <SliderItem className="flex items-center justify-center bg-muted/25 h-full border">
              <span className="text-lg font-medium">Recent Content</span>
            </SliderItem>
          </SliderContent>
        </Slider>
      </div>
    </SliderShowcaseCard>
  );
}
