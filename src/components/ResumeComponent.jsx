import { useContext } from "react"
import { DataContext } from "../utils/Context"
import ResumeSkills from "./ResumeSkills"

const ResumeComponent = () => {
    const { skillsData } = useContext(DataContext)

    return (
        <article className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {skillsData.map((skill, index) => (
                <ResumeSkills
                    key={index}
                    heading={skill.heading}
                    description={skill.description}
                    skills={skill.skills}
                />
            ))}
        </article>
    )
}
export default ResumeComponent