import { cormorant } from "@/app/font";
import { cn } from "@/lib/utils";

interface OfferTextProps {
  title: string;
  description: string;
  subTitle: string;
}
const OfferText: React.FC<OfferTextProps> = ({
  title,
  description,
  subTitle,
}) => {
  return (
    <div
      className={cn(
        cormorant.className,
        "px-8 py-4 flex flex-col  text-gray-700 text-center"
      )}
    >
      <p className='relative before:absolute before:top-full before:left-1/2 before:-translate-x-1/2 before:w-[70px] before:h-[1px] before:bg-gray-200'>
        {subTitle}
      </p>
      <h2 className='text-6xl font-medium'>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default OfferText;
