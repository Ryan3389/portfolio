function ProjectComponent() {
    return (
        <>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition">
                <h3 className="text-2xl font-bold mb-2 text-center">JWT Authentication</h3>
                <p className="text-gray-400 mb-5 text-xl">A secure JWT based login system that uses email verification</p>
                <div>
                    {["Java", "Spring Boot", "Spring Security", "Java Mail Sender", "PostgreSQL", "JWT"].map((tech, index) => (
                        <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition-all">
                            {tech}
                        </span>
                    ))}
                    <div className="my-10">
                        <a rel="noopener" href="https://github.com/Ryan3389/authentication" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-5">View Project</a>
                    </div>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition">
                <h3 className="text-2xl font-bold mb-2 text-center">Fantasy App</h3>
                <p className="text-gray-400 mb-5 text-xl">Browse baseball's top hit leaders, predict if a player makes the HOF with python's scikit learn</p>
                <div>
                    {["React", "Java", "Spring Boot", "Python", "Scikit Learn", "PostgreSQL"].map((tech, index) => (
                        <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition-all">
                            {tech}
                        </span>
                    ))}
                    <div className="my-10">
                        <a rel="noopener" href="https://github.com/Ryan3389/FantasyApp" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-5">View Project</a>
                    </div>
                </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition">
                <h3 className="text-2xl font-bold mb-2 text-center">ResumePro</h3>
                <p className="text-gray-400 mb-5 text-xl">Upload your resume, get AI generated feedback, powered by OpenAI API</p>
                <div>
                    {["React", "Express.js", "MongoDB", "JWT"].map((tech, index) => (
                        <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 mx-2 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 224, 0.1)] transition-all">
                            {tech}
                        </span>
                    ))}
                    <div className="my-10">
                        <a rel="noopener" href="https://github.com/Ryan3389/resume-assist" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-5">View Project</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectComponent