"use client";

import { memo } from "react";

const CounterTitleElement: React.FC<{
  title: string;
  description?: string;
}> = ({ title, description }) => {
  return (
    <div>
      <div className='font-medium'>{title}</div>
      {description && (
        <div className='text-gray-400 text-sm'>{description}</div>
      )}
    </div>
  );
};

export default memo(CounterTitleElement);
