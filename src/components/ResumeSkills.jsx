const ResumeSkills = ({ heading, description, skills }) => {
    return (
        <div>
            <h3 className="mb-2 text-xl font-bold text-center">{heading}</h3>
            <p className="text-gray-500">{description}</p>
            <ul className="flex flex-col items-center pt-5">
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    )
}

export default ResumeSkills