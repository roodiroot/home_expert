"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

const CTAWrapperAnimation = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const p = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], [0, 24]);

  return (
    <div ref={ref} className="h-auto lg:h-[300vh]">
      <div className="lg:sticky lg:top-0 lg:left-0 lg:w-full lg:h-screen">
        <motion.div
          style={{ top: p, left: p, right: p, bottom: p, borderRadius }}
          className="relative lg:absolute overflow-hidden inset-0 bg-accent-600 "
        >
          {children}
        </motion.div>
      </div>
    </div>
  );
};

export default CTAWrapperAnimation;
