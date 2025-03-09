import ProjectsComponent from "../components/ProjectsComponent"

const ProjectsPage = () => {
    return (
        <section className="min-h-screen bg-backgroundColor text-secondaryColor projects-section">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <article className="mb-10">
                    <h2 className="text-center mb-4 text-4xl  font-extrabold">Full Stack Developer</h2>
                    <p className="sm:text-xl text-secondaryText projects-intro">I am a full-stack developer specializing in modern technologies. I create dynamic, user-friendly web applications that transform ideas into seamless, functional solutions.</p>
                </article>
                <ProjectsComponent />
            </div>
        </section>
    )
}


export default ProjectsPage
