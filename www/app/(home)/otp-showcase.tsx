import { OTPContainer, OTPGroup } from "@/components/component-x/otp";
import React from "react";
import { ComponentShowcase } from "./component-showcase";

const OTPShowcase = () => {
  return (
    <ComponentShowcase
      variant="full"
      docsLink="/docs/components/otp"
      showHeader={false}
    >
      <div className="w-full max-w-md">
        <div className="space-y-8">
          <div className="space-y-0.5">
            <h1 className="text-3xl font-semibold text-foreground">
              Verify Your Code
            </h1>
            <p className="text-muted-foreground text-sm">
              Enter the 6-digit code sent to your email
            </p>
          </div>

          <div className="flex flex-col gap-0.5 px-4 sm:px-8">
            <OTPContainer length={6}>
              <OTPGroup className="justify-evenly w-full " />
              <p className="text-right text-xs text-muted-foreground">
                You can manually type the otp or copy paste it.
              </p>
            </OTPContainer>
          </div>
        </div>
      </div>
    </ComponentShowcase>
  );
};

export default OTPShowcase;
