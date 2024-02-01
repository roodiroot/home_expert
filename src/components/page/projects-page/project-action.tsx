"use client";

import useModal from "@/hooks/useModal";

interface ProjectActionProps extends React.HtmlHTMLAttributes<HTMLElement> {}
const ProjectAction: React.FC<ProjectActionProps> = ({ className }) => {
  const { onOpen } = useModal();

  return (
    <div className={className}>
      <button
        onClick={onOpen}
        className='text-accent-600 font-medium text-sm flex gap-x-1 items-center'
      >
        Заказать ремонт
      </button>
    </div>
  );
};

export default ProjectAction;
