"use client";

import {
  Slider,
  SliderContent,
  SliderItem,
  SliderNav,
  SliderNavTrigger,
} from "@/components/component-x/slider";

export function SliderWithTab() {
  return (
    <div className="w-full h-full p-2">
      <Slider className="border flex flex-col h-full ">
        <SliderNav className="border-b">
          <SliderNavTrigger>Featured</SliderNavTrigger>
          <SliderNavTrigger>Popular</SliderNavTrigger>
          <SliderNavTrigger>Recent</SliderNavTrigger>
        </SliderNav>
        <SliderContent className="flex-1">
          <SliderItem className="flex items-center justify-center bg-muted/25 h-full">
            <span>Featured Content</span>
          </SliderItem>
          <SliderItem className="flex items-center justify-center bg-muted/25 h-full">
            <span>Popular Content</span>
          </SliderItem>
          <SliderItem className="flex items-center justify-center bg-muted/25 h-full">
            <span>Recent Content</span>
          </SliderItem>
        </SliderContent>
      </Slider>
    </div>
  );
}
