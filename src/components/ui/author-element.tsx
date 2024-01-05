import Image from "next/image";

const AuthorElement: React.FC<{
  img: string;
  name: string;
  work: string;
  className?: string;
}> = ({ img, name, work, className }) => (
  <div className={`relative flex items-center gap-x-4 ${className}`}>
    <Image
      src={img}
      width={40}
      height={40}
      alt='face'
      className='w-10 h-10 rounded-full bg-gray-100'
    />
    <div className='text-sm leading-6'>
      <p className='font-semibold line-clamp-1'>{name}</p>
      <p className='text-gray-600 line-clamp-1'>{work}</p>
    </div>
  </div>
);

export default AuthorElement;
