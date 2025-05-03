import { ProjectNode } from "@/data/projects-api";
import ProjectsItem from "./project-item";

interface ProjectListProps extends React.HtmlHTMLAttributes<HTMLUListElement> {
  projectList?: ProjectNode[];
}

const ProjectList = ({ projectList, ...props }: ProjectListProps) => {
  return (
    <ul
      className="mx-auto mt-14 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      {...props}
    >
      {projectList?.map((item) => (
        <ProjectsItem
          key={item.id}
          title={item.fieldsProjects.title}
          description={item.fieldsProjects.description}
          duration={item.fieldsProjects.duration}
          img={[
            item.fieldsProjects.image?.node.link,
            item.fieldsProjects.image_1?.node.link,
            item.fieldsProjects.image_2?.node.link,
            item.fieldsProjects.image_3?.node.link,
            item.fieldsProjects.image_4?.node.link,
          ].filter((img) => img !== undefined)}
        />
      ))}
    </ul>
  );
};

export default ProjectList;
