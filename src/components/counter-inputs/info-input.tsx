"use client";

import { UseFormRegister, ValidationRule } from "react-hook-form";
import CounterTitleElement from "../counter-page-components/counter-title-element";
import { InputElement } from "../ui/input-element";
import { CounterForm } from "../counter-page-components/counter-form";

interface InfoInputProps extends React.HtmlHTMLAttributes<HTMLElement> {
  id: "name" | "phone";
  title: string;
  placeholder: string;
  register: UseFormRegister<CounterForm>;
  errors: any;
  description?: string;
  pattern?: ValidationRule<RegExp> | undefined;
}

const InfoInput: React.FC<InfoInputProps> = ({
  id,
  title,
  description,
  className,
  register,
  errors,
  placeholder,
  pattern,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <CounterTitleElement title={title} description={description} />
      <div className='relative block mt-4'>
        <InputElement
          id={id}
          placeholder={placeholder}
          label=''
          {...register(id, { required: true, pattern: pattern || undefined })}
          ariaInvalid={errors[id] ? true : false}
        />
      </div>
    </div>
  );
};

export default InfoInput;
