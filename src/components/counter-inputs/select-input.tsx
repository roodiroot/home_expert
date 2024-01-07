"use client";

import { memo } from "react";

import CounterTitleElement from "../counter-page-components/counter-title-element";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface SelectInputProps extends React.HtmlHTMLAttributes<HTMLElement> {
  values: { name: string; value: string }[];
  setValue: (value: string) => void;
  placeholder: string;
  title: string;
  description?: string;
  label?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({
  title,
  description,
  placeholder,
  className,
  values,
  setValue,
  label,
}) => {
  return (
    <div className={className}>
      <CounterTitleElement title={title} description={description} />
      <div className='relative block mt-4'>
        <Select onValueChange={(e) => setValue(e)}>
          <SelectTrigger className='w-full'>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {label && <SelectLabel>{label}</SelectLabel>}
              {values.map((i) => (
                <SelectItem key={i.name} value={i.value}>
                  {i.name}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default memo(SelectInput);
