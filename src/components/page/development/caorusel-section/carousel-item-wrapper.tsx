import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface CarouselItemWrapperProps
  extends React.HtmlHTMLAttributes<HTMLElement> {}

const CarouselItemWrapper: React.FC<CarouselItemWrapperProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <CarouselItem className="pl-0">
      <div className="p-1">
        <div
          {...props}
          className={cn(
            "relative rounded-2xl sm:rounded-3xl ring-1 ring-gray-200 bg-gray-100 overflow-hidden aspect-[1/1.7] sm:aspect-[1/1.3] md:aspect-[2/1.7] lg:aspect-[2/1.5] xl:aspect-[2/1]",
            className
          )}
        >
          {children}
        </div>
      </div>
    </CarouselItem>
  );
};

export default CarouselItemWrapper;
