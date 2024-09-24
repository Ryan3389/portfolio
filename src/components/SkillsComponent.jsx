const SkillsComponent = ({ heading, description, link }) => {
    return (
        <div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">{heading}</h3>
            <p className="text-gray-500">{description}</p>
            {link && <a rel="noopener" target="_blank" href={link}>GitHub Repository</a>}

        </div>
    )
}

export default SkillsComponent