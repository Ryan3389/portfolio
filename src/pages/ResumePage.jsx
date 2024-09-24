import ResumeComponent from "../components/ResumeComponent"

const ResumePage = () => {
    return (
        <section className="bg-white h-[90vh]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <article className="flex flex-col items-center m-auto max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Download my Resume</h2>
                    <p className="text-gray-500 sm:text-xl">I recently completed a Coding Bootcamp run by the University of Toronto. I have created a variety of projects, ranging in difficuly, developing my knowledge in the latest technologies</p>
                </article>
                <ResumeComponent />
            </div>
        </section>
    )
}
export default ResumePage