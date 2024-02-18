import Image from "next/image";

const ImageSector: React.FC = () => {
  return (
    <div className='hidden sm:block sm:relative bg-gray-400  w-[200px]'>
      <Image
        className='absolute inset-0 aspect-[1/1.7] w-full h-full object-cover'
        src='/image/popup/q.jpg'
        loading='lazy'
        width={400}
        height={800}
        alt='Красивый ремонт'
      />
    </div>
  );
};

export default ImageSector;
