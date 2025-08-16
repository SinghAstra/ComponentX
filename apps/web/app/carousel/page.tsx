import {
  Carousel,
  CarouselContent,
  CarouselIndicator,
  CarouselItem,
} from "./carousel";

const CarouselPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="relative w-full max-w-lg mx-auto">
        <Carousel>
          <CarouselContent>
            {Array.from({ length: 5 }, (_, i) => {
              return (
                <CarouselItem key={i} className="p-4">
                  <div className="flex items-center justify-center border w-full min-h-[400px]">
                    {i + 1}
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselIndicator />
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselPage;
