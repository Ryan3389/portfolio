import RyanCuthbert from '../../src/images/RyanCuthbert.png'
const HomePage = () => {
    return (
        <section className="bg-white text-gray-900 h-[90vh]">
            <div className="grid max-w-screen-xl px-4 py-8 mx:auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 m-auto w-[80%]">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl">Ryan Cuthbert - Full Stack Developer</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">I am a full stack web developer who utilizes a robust tech stack for creating dynamic applications. I utilize React to create a dynamic front end, while creating efficient RESTful APIs on the backend, connecting them together with MongoDB, and PostgreSQL.</p>

                    <a target='_blank' href="/RyanCuthbert_resume.pdf" download="RyanCuthbert_resume.pdf" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white ">Resume</a>
                    <a target='_blank' href="https://github.com/Ryan3389" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border border-gray-300 rounded-lg focus:ring-4 focus:ring-gray-100 dark:text-white mx-5">GitHub</a>
                </div>
                <div className="mx-10 lg:mt-0 lg:col-span-5 lg:flex">
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={RyanCuthbert} alt="Ryan Cuthbert Picture" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage