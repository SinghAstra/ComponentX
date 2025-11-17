"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderItem,
  SliderNavigation,
} from "@/components/component-x/slider";
import { SliderShowcaseCard } from "./slider-showcase-card";

export function SliderImageGalleryShowcase() {
  const images = [
    { id: 1, color: "from-blue-400 to-cyan-300" },
    { id: 2, color: "from-purple-400 to-pink-300" },
    { id: 3, color: "from-green-400 to-emerald-300" },
  ];

  return (
    <SliderShowcaseCard
      title="Image Gallery"
      description="Showcase images with smooth transitions"
      docsLink="/docs/components/slider"
      variant="full"
    >
      <div className="w-full h-full">
        <Slider className="h-full flex flex-col w-full rounded border overflow-hidden">
          <SliderContent className="flex-1">
            {images.map((img) => (
              <SliderItem
                key={img.id}
                className="flex items-center justify-center h-full"
              >
                <div
                  className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${img.color}`}
                >
                  <span className="text-3xl font-bold text-white">
                    Image {img.id}
                  </span>
                </div>
              </SliderItem>
            ))}
          </SliderContent>
          <div className="flex items-center justify-between p-4 bg-background/50">
            <div className="flex-1 flex justify-center items-center">
              <SliderIndicatorDots />
            </div>
            <SliderNavigation />
          </div>
        </Slider>
      </div>
    </SliderShowcaseCard>
  );
}
