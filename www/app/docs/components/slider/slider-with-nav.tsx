"use client";

import {
  Slider,
  SliderContent,
  SliderItem,
  SliderNav,
  SliderNavTrigger,
} from "@/components/component-x/slider";

export function SliderWithNav() {
  return (
    <div className="w-full space-y-6">
    

      <Slider>
          <SliderNav className="border-b">
        <SliderNavTrigger>Featured</SliderNavTrigger>
        <SliderNavTrigger>Popular</SliderNavTrigger>
        <SliderNavTrigger>Recent</SliderNavTrigger>
      </SliderNav>
        <SliderContent>
          <SliderItem className="h-64 bg-primary/20 flex items-center justify-center rounded-lg">
            <span className="text-xl text-foreground">Featured Content</span>
          </SliderItem>
          <SliderItem className="h-64 bg-secondary/20 flex items-center justify-center rounded-lg">
            <span className="text-xl text-foreground">Popular Content</span>
          </SliderItem>
          <SliderItem className="h-64 bg-accent/20 flex items-center justify-center rounded-lg">
            <span className="text-xl text-foreground">Recent Content</span>
          </SliderItem>
        </SliderContent>
      </Slider>
    </div>
  );
}
