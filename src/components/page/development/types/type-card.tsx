import { cn } from "@/lib/utils";
import Image from "next/image";

interface TypeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  title: string;
  description: string;
  price: string;
}

const TypeCard: React.FC<TypeCardProps> = ({
  title,
  description,
  image,
  price,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("flex flex-col gap-4 sm:gap-8", className)}>
      <div className="">
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="relative flex items-end overflow-hidden w-full h-full aspect-[1.3/1] bg-gray-900 rounded-2xl p-4 sm:py-8 sm:px-10">
        <Image
          width={600}
          height={460}
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover "
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/0 to-gray-900/70"></div>
        <div className="relative z-10 font-medium text-white mt-auto text-lg">
          {price}
        </div>
      </div>
    </div>
  );
};

export default TypeCard;
