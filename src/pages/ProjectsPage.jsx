import ProjectComponent from "../components/ProjectsComponent"
import RevealOnScroll from "../components/RevealOnScroll"

const ProjectsPage = () => {
    return (
        <section className="min-h-screen flex items-center justify-center flex-col py-20">
            <RevealOnScroll>
                <h2 className="text-5xl font-bold mb-20 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>

                <article className="grid grid-cols-1 md:grid-cols-2 gap-6 w-[80vw]">
                    <ProjectComponent />
                </article>
            </RevealOnScroll>
        </section>
    )
}


export default ProjectsPage
