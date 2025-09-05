"use client";

import {
  Carousel,
  CarouselBottomNavigation,
  CarouselContent,
  CarouselFooter,
  CarouselIndicatorRoundedIcon,
  CarouselItem,
} from "@/components/component-x/carousel";
import LampBackground from "@/components/component-x/lamp-background";

export default function FeaturesCarousel() {
  return (
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((elem, index) => {
            return (
              <CarouselItem
                className="min-h-[70vh] flex items-center justify-center relative"
                key={index}
              >
                <LampBackground />

                <div className="px-3 py-2 bg-muted/40 backdrop-blur-lg">
                  <p className="text-2xl">GIF {elem} Showcasing Product</p>
                </div>
              </CarouselItem>
            );
          })}
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
