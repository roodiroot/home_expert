"use client";

import PortfolioImgViewer from "@/components/image-viewer/portfolio-img-viewer";

interface ProjectsItemProps extends React.HtmlHTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  img: (string | undefined)[];
  duration: string;
}

const ProjectsItem: React.FC<ProjectsItemProps> = ({
  title,
  duration,
  description,
  img,
}) => {
  return (
    <li>
      <div className="aspect-[3/2] relative w-full rounded-2xl bg-gray-100 border-gray-200 overflow-hidden">
        <PortfolioImgViewer className="rounded-2xl" imgList={img} />
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold leading-8 tracking-tight">
          {title}
        </h3>
        <p className="leading-7 text-gray-600 italic">
          Время выполнения: {duration}
        </p>
        <p className="mt-4 text-gray-600 leading-7 line-clamp-3">
          {description}
        </p>
      </div>
    </li>
  );
};

export default ProjectsItem;
