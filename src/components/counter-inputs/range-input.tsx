"use client";

import { memo } from "react";

import { Slider } from "../ui/slider";
import { cn } from "@/lib/utils";
import CounterTitleElement from "../counter-page-components/counter-title-element";
import { InputElement } from "../ui/input-element";

const min = 10;
const max = 200;

interface RangeInputProps extends React.HtmlHTMLAttributes<HTMLElement> {
  value: number;
  setValue: (value: number) => void;
  defaultValue: number;
  title: string;
  description?: string;
}

const RangeInput: React.FC<RangeInputProps> = ({
  value,
  setValue,
  defaultValue,
  title,
  className,
  description,
}) => {
  // console.log("range input");
  return (
    <div className={cn(className)}>
      <CounterTitleElement title={title} description={description} />
      <div className="max-w-24 flex items-end gap-2 mt-4">
        <InputElement
          id="range_input"
          label=""
          type="number"
          inputMode="numeric"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />
        <div className="mb-2">
          м<sup>2</sup>
        </div>
      </div>
      <div className="relative block mt-12 pb-7">
        <span className="absolute left-0 -top-7 text-sm">
          {min}м<sup>2</sup>
        </span>
        <Slider
          onValueChange={(e) => setValue(Number(e.join()))}
          min={min}
          max={max}
          value={[value]}
          defaultValue={[defaultValue]}
        />
        <span className="absolute right-0 -top-7 text-sm">
          {max}м<sup>2</sup>
        </span>
      </div>
    </div>
  );
};

export default memo(RangeInput);
