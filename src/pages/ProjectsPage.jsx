import ProjectsComponent from "../components/ProjectsComponent"

const ProjectsPage = () => {
    return (
        <section className="bg-white h-[90vh]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <article className="mb-10">
                    <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Full Stack Developer</h2>
                    <p className="text-gray-500 sm:text-xl">Welcome to my portfolio! After completing a bootcamp focused on the MERN stack—MongoDB, Express.js, React, and Node.js—I’m excited to present the projects that showcase my skills in full-stack development. Each project reflects my ability to build dynamic, user-friendly web applications. Explore my work to see how I turn ideas into functional solutions.</p>
                </article>
                <ProjectsComponent />
            </div>
        </section>
    )
}

export default ProjectsPage