import { useContext } from "react";
import { DataContext } from "../utils/Context";
import SkillsComponent from "./SkillsComponent";

const ProjectsComponent = () => {
    const { projectData } = useContext(DataContext);

    return (
        <article className="m-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projectData.map((project, index) => (
                <SkillsComponent
                    key={index}
                    heading={project.heading}
                    image={project.image}
                    description={project.description}
                    link={project.link}
                />
            ))}
        </article>
    );
};


export default ProjectsComponent;
