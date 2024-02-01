import PortfolioImgViewer from "@/components/image-viewer/portfolio-img-viewer";
import AuthorElement from "@/components/ui/author-element";
import { Skeleton } from "@/components/ui/skeleton";
import { PortfolioListType } from "@/utils/constance";

const PortfolioItem: React.FC<PortfolioListType> = ({
  img,
  date,
  tags,
  title,
  description,
  author,
}) => (
  <article className='flex flex-col items-start justify-between'>
    <div className='relative w-full'>
      <div className='relative max-w-full h-auto aspect-[16/9] rounded-2xl sm:aspect-[2/1] lg:aspect-[3/2] overflow-hidden'>
        <PortfolioImgViewer imgList={img} className='rounded-2xl' />
      </div>
      <div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 pointer-events-none'></div>
    </div>
    <div className='max-w-[36rem]'>
      <div className='mt-8 flex items-center gap-x-4 text-xs'>
        <time className='text-gray-500'>{date}</time>
        <div className='flex gap-2'>
          {tags?.length && tags.map((j) => <Tag key={j} name={j} />)}
        </div>
      </div>
      <div className='relative'>
        <h3 className='mt-3 text-lg font-semibold leading-6'>{title}</h3>
        <p className='mt-5 line-clamp-3 text-sm leading-6 text-gray-600'>
          {description}
        </p>
        {author ? (
          <AuthorElement className='mt-8' {...author} />
        ) : (
          <div className='relative flex items-center gap-x-4 mt-8'>
            <Skeleton className='w-10 h-10 rounded-full' />
            <div className='flex flex-col gap-1'>
              <Skeleton className='w-28 h-4' />
              <Skeleton className='w-40 h-4' />
            </div>
          </div>
        )}
      </div>
    </div>
  </article>
);

const Tag: React.FC<{ name: string }> = ({ name }) => (
  <span className='relative z-10 rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600'>
    {name}
  </span>
);

export default PortfolioItem;
