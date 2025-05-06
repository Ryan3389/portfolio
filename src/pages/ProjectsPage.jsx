import ProjectsComponent from "../components/ProjectsComponent"
import RevealOnScroll from "../components/RevealOnScroll"

const ProjectsPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center flex-col py-20">
            <RevealOnScroll>
                <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                <article className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80vw]">
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
                                <a href="https://github.com/Ryan3389/authentication" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-5">View Project</a>
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
                                <a href="https://github.com/Ryan3389/FantasyApp" target="_blank" className="text-blue-400 hover:text-blue-300 transition-colors my-5">View Project</a>
                            </div>
                        </div>
                    </div>
                </article>
            </RevealOnScroll>
        </section>
    )
}


export default ProjectsPage
// import ProjectsComponent from "../components/ProjectsComponent"

// const ProjectsPage = () => {
//     return (
//         <section className="min-h-screen flex items-center justify-center flex-col py-20">
//             <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
//                 <article className="mb-10">
//                     <h2 className="text-center mb-4 text-4xl  font-extrabold">Full Stack Developer</h2>
//                     <p className="sm:text-xl text-secondaryText projects-intro">I am a full-stack developer specializing in modern technologies. I create dynamic, user-friendly web applications that transform ideas into seamless, functional solutions.</p>
//                 </article>
//                 <ProjectsComponent />
//             </div>
//         </section>
//     )
// }


// export default ProjectsPage
