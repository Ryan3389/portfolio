const SkillsComponent = ({ heading, image, description, link }) => {
    return (
        <div>
            <h3 className="mb-2 text-xl font-bold text-center">{heading}</h3>
            <div className="flex justify-center mb-2">
                <img src={image} alt="project" className="project-img" />
            </div>
            <p className="text-gray-500">{description}</p>
            {link && <a className="flex justify-center mt-2" rel="noopener" target="_blank" href={link}>GitHub Repository</a>}

        </div>
    )
}

export default SkillsComponent