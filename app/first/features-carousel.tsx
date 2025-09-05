"use client";

import {
  Carousel,
  CarouselBottomNavigation,
  CarouselContent,
  CarouselFooter,
  CarouselIndicatorRoundedIcon,
  CarouselItem,
} from "@/components/component-x/carousel";

export default function FeaturesCarousel() {
  return (
    <div className="p-4 sm:px-8">
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem className="min-h-[70vh] flex items-center justify-center">
            <p className="text-2xl">GIF 1 Showcasing Product</p>
          </CarouselItem>
          <CarouselItem className="min-h-[70vh] flex items-center justify-center">
            <p className="text-2xl">GIF 2 Showcasing Product</p>
          </CarouselItem>
          <CarouselItem className="min-h-[70vh] flex items-center justify-center">
            <p className="text-2xl">GIF 3 Showcasing Product</p>
          </CarouselItem>
          <CarouselItem className="min-h-[70vh] flex items-center justify-center">
            <p className="text-2xl">GIF 4 Showcasing Product</p>
          </CarouselItem>
          <CarouselItem className="min-h-[70vh] flex items-center justify-center">
            <p className="text-2xl">GIF 5 Showcasing Product</p>
          </CarouselItem>
        </CarouselContent>

        <CarouselFooter>
          <div className="flex justify-between items-center w-full mt-6">
            <CarouselIndicatorRoundedIcon className="relative" />
            <CarouselBottomNavigation />
          </div>
        </CarouselFooter>
      </Carousel>
    </div>
  );
}
