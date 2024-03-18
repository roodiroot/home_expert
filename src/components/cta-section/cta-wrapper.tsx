"use client";

import { useSize } from "@/hooks/use-size";
import CTAWrapperAnimation from "./cta-wrapper-animation";

const CTAWrapper = ({ children }: { children: React.ReactNode }) => {
  const { width } = useSize();

  if (width && width < 1024) {
    return (
      <div className="relative lg:absolute overflow-hidden inset-0 bg-accent-600 ">
        {children}
      </div>
    );
  }
  if (!width) return;
  return <CTAWrapperAnimation>{children}</CTAWrapperAnimation>;
};

export default CTAWrapper;
