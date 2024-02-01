import ProjectAction from "@/components/page/projects-page/project-action";
import ProjectsHeader from "@/components/page/projects-page/projects-header";
import ProjectsList from "@/components/page/projects-page/projects-list";
import projectList from "@/utils/projects.json";

const Projects: React.FC = () => {
  return (
    <>
      <ProjectsHeader />
      <div className='bg-white py-24 sm:py32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <div className='mx-auto max-w-2xl lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Наши реализованные проекты
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Здесь вы найдете примеры работы нашей команды, демонстрирующие наш
              профессионализм, внимание к деталям и индивидуальный подход к
              каждому клиенту.
            </p>
          </div>
          <ul className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {projectList ? (
              projectList.map((i, index) => (
                <ProjectsList
                  key={index}
                  title={i.shortTitle}
                  time={i.time}
                  description={i.description}
                  img={i.img}
                />
              ))
            ) : (
              <></>
            )}
          </ul>
          <ProjectAction className='mt-20' />
        </div>
      </div>
    </>
  );
};

export default Projects;
