import Image from "next/image";

import AuthorElement from "@/components/ui/author-element";
import { PortfolioListType } from "@/utils/constance";

interface PortfolioListSection {
  list: PortfolioListType[];
}
export const PortfolioListSection: React.FC<PortfolioListSection> = ({
  list,
}) => {
  return (
    <div className='py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <h2 className='text-3xl font-bold tracking-tight sm:text-4xl text-balance'>
            Портфолио готовых проектов
          </h2>
          <p className='mt-2 text-lg leading-8 text-gray-600 text-balance'>
            Тут несколько из многих проектов, которыми мы гордимся.
          </p>
        </div>
        <div className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {list?.map((i) => (
            <ElementItem key={i.title} {...i} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ElementItem: React.FC<PortfolioListType> = ({
  img,
  date,
  tags,
  title,
  description,
  author,
}) => (
  <article className='flex flex-col items-start justify-between'>
    <div className='relative w-full'>
      <Image
        src={img}
        width={700}
        height={350}
        alt='portfolio screen'
        className='max-w-full h-auto aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]'
      />
      <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10'></div>
    </div>
    <div className='max-w-[36rem]'>
      <div className='mt-8 flex items-center gap-x-4 text-xs'>
        <time className='text-gray-500'>{date}</time>
        <div className='flex gap-2'>
          {tags.map((j) => (
            <Tag key={j} name={j} />
          ))}
        </div>
      </div>
      <div className='relative'>
        <h3 className='mt-3 text-lg font-semibold leading-6'>{title}</h3>
        <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
          {description}
        </p>
        <AuthorElement className='mt-8' {...author} />
      </div>
    </div>
  </article>
);

const Tag: React.FC<{ name: string }> = ({ name }) => (
  <span className='relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600'>
    {name}
  </span>
);
