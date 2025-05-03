import Image from "next/image";

const ContentSection = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="bg-gray-50 relative overflow-hidden shadow-xl sm:rounded-[40px] aspect-square sm:aspect-[815/491] lg:aspect-[1211/491]">
        <Image
          src="/image/noise-page/hero.jpg"
          alt="Noise content image"
          fill
          className="object-cover object-center"
        />
      </div>
    </div>
  );
};

export default ContentSection;
