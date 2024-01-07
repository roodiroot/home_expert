"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className='relative h-[2px] w-full grow overflow-hidden rounded-full bg-gray-300 '>
      {/* <SliderPrimitive.Range className='absolute h-full bg-gray-400' /> */}
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className='relative cursor-pointer block h-5 w-5 rounded-full  bg-indigo-300 bg-gray-900/5  ring-1 ring-inset shadow-lg ring-gray-900/10 transition-colors focus:outline focus:outline-4 focus:outline-accent-600/10  disabled:pointer-events-none disabled:opacity-50 '>
      <span className='absolute top-5 left-4 text-sm font-medium'>
        {Number(value?.join()) || 0}м<sup>2</sup>
      </span>
    </SliderPrimitive.Thumb>
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
