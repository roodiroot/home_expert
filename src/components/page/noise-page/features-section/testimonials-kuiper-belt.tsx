import { TitleElement } from "@/components/ui/h2-element";
import { NoiseItemNode } from "@/data/type-noise-api";
import { cn } from "@/lib/utils";
import React from "react";

interface TestemonialKuiperBeltProps {
  title: string;
  description: string;
  className?: string;
}
const TestemonialKuiperBelt: React.FC<TestemonialKuiperBeltProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={cn("pt-8 sm:inline-block sm:w-full sm:px-4", className)}>
      <div className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
        <div className="space-y-12">
          <p className="text-balance text-gray-900 text-3xl font-bold">
            {title}
          </p>
          <p className="text-balance text-gray-600 text-xl ">{description}</p>
        </div>
      </div>
    </div>
  );
};

interface TestemonialsKuiperBeltBlockProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  noiseContent?: NoiseItemNode[];
}
const FeaturesNoisePageBlock = React.forwardRef<
  HTMLDivElement,
  TestemonialsKuiperBeltBlockProps
>(({ title, noiseContent, className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      {...props}
      className={`bg-white py-24 sm:py-32 ${className ? className : ""}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <TitleElement text={title} className="mt-2 " />
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:mx-0 lg:max-w-none">
          <div className="-mt-8 sm:-mx-4 sm:columns-2 lg:columns-3 sm:text-[0px]">
            {noiseContent?.map((l) => (
              <TestemonialKuiperBelt
                key={l.id}
                title={l.fields.title}
                description={l.fields.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

FeaturesNoisePageBlock.displayName = "FeaturesNoisePageBlock";
export { FeaturesNoisePageBlock };
