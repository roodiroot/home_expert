"use client";

import { cn } from "@/lib/utils";
import { memo } from "react";

const CounterTitleElement: React.FC<{
  title: string;
  description?: string;
  className?: string;
}> = ({ title, description, className }) => {
  return (
    <div>
      <div className={cn("font-medium", className)}>{title}</div>
      {description && (
        <div className="text-gray-400 text-sm ">{description}</div>
      )}
    </div>
  );
};

export default memo(CounterTitleElement);
