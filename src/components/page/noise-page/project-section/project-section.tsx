import { ProjectNode } from "@/data/projects-api";
import ProjectList from "./project-list";
import { TitleElement } from "@/components/ui/h2-element";

interface ProjectSectionProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  projectList?: ProjectNode[];
}

const ProjectSection = ({ projectList, ...props }: ProjectSectionProps) => {
  return (
    <div {...props} className="bg-white pb-24 pt-20 lg:pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <TitleElement text="Реализованные проекты" className="mt-2 " />
        <ProjectList projectList={projectList} />
      </div>
    </div>
  );
};

export default ProjectSection;
