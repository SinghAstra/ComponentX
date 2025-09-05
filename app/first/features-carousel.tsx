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
    <div>
      <Carousel className="w-full">
        <CarouselContent>
          {[1, 2, 3, 4, 5].map((elem, index) => {
            return (
              <CarouselItem
                className="min-h-[70vh] flex items-center justify-center relative"
                key={index}
              >
                <div
                  className={`absolute inset-0 z-[-1] overflow-hidden bg-[url(/assets/gradient-2.webp)] bg-cover bg-no-repeat bg-bottom-center `}
                ></div>

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
