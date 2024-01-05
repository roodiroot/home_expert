import * as React from "react";
import AuthorElement from "./author-element";
import { H2Element, TitleElement } from "./h2-element";

interface TestemonialKuiperBeltProps {
  name: string;
  text: string;
  img: string;
  date: string;
  className?: string;
}
const TestemonialKuiperBelt: React.FC<TestemonialKuiperBeltProps> = ({
  name,
  text,
  img,
  date,
  className,
}) => {
  return (
    <div
      className={`pt-8 sm:inline-block sm:w-full sm:px-4 ${
        className ? className : ""
      }`}
    >
      <figure className='rounded-2xl bg-gray-50 p-8 text-sm leading-6'>
        <blockquote className='text-gray-600'>
          <p className='text-balance'>{text}</p>
        </blockquote>
        <AuthorElement img={img} name={name} work={date} className='mt-6' />
      </figure>
    </div>
  );
};

interface TestemonialsKuiperBeltBlockProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  testimonials_list: TestemonialKuiperBeltProps[];
}
const TestemonialsKuiperBeltBlock = React.forwardRef<
  HTMLDivElement,
  TestemonialsKuiperBeltBlockProps
>(({ title, description, testimonials_list, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`bg-white py-24 sm:py-32 ${className ? className : ""}`}
    >
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <H2Element text={title} />
          <TitleElement text={description} className='mt-2 ' />
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:mx-0 lg:max-w-none'>
          <div className='-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3 sm:text-[0px]'>
            {testimonials_list.map((l) => (
              <TestemonialKuiperBelt
                key={l.name}
                name={l.name}
                text={l.text}
                img={l.img}
                date={l.date}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

TestemonialsKuiperBeltBlock.displayName = "TestemonialsKuiperBeltBlock";
export { TestemonialsKuiperBeltBlock };
