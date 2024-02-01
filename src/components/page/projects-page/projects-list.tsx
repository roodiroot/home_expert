"use client";

import PortfolioImgViewer from "@/components/image-viewer/portfolio-img-viewer";

interface ProjectsListProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  img: string[];
  time: string;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
  title,
  time,
  description,
  img,
}) => {
  return (
    <li>
      <div className='aspect-[3/2] relative w-full rounded-2xl bg-gray-100 border-gray-200 overflow-hidden'>
        <PortfolioImgViewer className='rounded-2xl' imgList={img} />
      </div>
      <div className='mt-6'>
        <h3 className='text-lg font-semibold leading-8 tracking-tight'>
          {title}
        </h3>
        <p className='leading-7 text-gray-600 italic'>
          Время выполнения: {time}
        </p>
        <p className='mt-4 text-gray-600 leading-7 line-clamp-3'>
          {description}
        </p>
      </div>
    </li>
  );
};

export default ProjectsList;
