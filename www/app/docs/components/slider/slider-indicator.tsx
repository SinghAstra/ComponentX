"use client";

import {
  Slider,
  SliderContent,
  SliderIndicatorDots,
  SliderIndicatorLabels,
  SliderItem,
} from "@/components/component-x/slider";

export function SliderIndicators() {
  const plans = ["Starter", "Professional", "Enterprise"];

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">
          Dot Indicators
        </h3>
        <Slider className="h-48 bg-muted/30 rounded-lg border">
          <SliderContent>
            {plans.map((plan, idx) => (
              <SliderItem key={idx}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      Plan {idx + 1}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground">
                      {plan}
                    </h3>
                  </div>
                </div>
              </SliderItem>
            ))}
          </SliderContent>
          <SliderIndicatorDots className="mt-4" />
        </Slider>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-foreground mb-4">
          Label Indicators
        </h3>
        <Slider className="h-48 bg-muted/30 rounded-lg border">
          <SliderContent>
            {plans.map((plan, idx) => (
              <SliderItem key={idx}>
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <p className="text-muted-foreground text-sm">
                      Plan {idx + 1}
                    </p>
                    <h3 className="text-2xl font-bold text-foreground">
                      {plan}
                    </h3>
                  </div>
                </div>
              </SliderItem>
            ))}
          </SliderContent>
          <SliderIndicatorLabels labels={plans} className="mt-4" />
        </Slider>
      </div>
    </div>
  );
}
