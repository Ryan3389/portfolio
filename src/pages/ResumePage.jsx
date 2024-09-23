const ResumePage = () => {
    return (
        <section className="bg-white h-[90vh]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <article className="flex flex-col items-center m-auto max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Download my Resume</h2>
                    <p className="text-gray-500 sm:text-xl">I recently completed a Coding Bootcamp run by the University of Toronto. I have created a variety of projects, ranging in difficuly, developing my knowledge in the latest technologies</p>
                </article>
                <article className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div>
                        <h3 className="mb-2 text-xl font-bold text-center">Front End</h3>
                        <p className="text-gray-500 dark:text-gray-400">Upon completing this program, I have created a series of projects that showcase my extensive knowledge in the following areas</p>
                        <ul className="flex flex-col items-center pt-5">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold text-center">Server</h3>
                        <p className="text-gray-500 dark:text-gray-400">Beyond the front end, I have created a variety of projects showcasing my ability to create robust and efficient backend systems and RESTful APIs using the following technologies:</p>
                        <ul className="flex flex-col items-center pt-5">
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>GraphQL</li>
                            <li>REST API</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="mb-2 text-xl font-bold text-center">Backend</h3>
                        <p className="text-gray-500 dark:text-gray-400">I have a strong foundation in both SQL and NoSQL databases with designing, implementing and organizing schemas and much more using the folloiwing:</p>
                        <ul className="flex flex-col items-center pt-5">
                            <li>MongoDB</li>
                            <li>PostgreSQL</li>
                            <li>Mongoose</li>
                            <li>Sequelize</li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default ResumePage