import { useContext } from "react";
import { DataContext } from "../utils/Context";
import SkillsComponent from "./SkillsComponent";

const ProjectsComponent = () => {
    const { projectData } = useContext(DataContext);

    return (
        <article className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {projectData.map((project, index) => (
                <SkillsComponent
                    key={index}
                    heading={project.heading}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </article>
    );
};

export default ProjectsComponent;
