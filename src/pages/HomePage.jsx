import RyanCuthbert from '../../src/images/RyanCuthbert.png'
import BtnComponent from '../components/BtnComponent'
const HomePage = () => {

    const resumeText = 'Resume'
    const href = '/RyanCuthbert_resume.pdf'
    return (
        <section className="bg-backgroundColor text-secondaryColor h-[90vh]">
            <div className="grid max-w-screen-xl px-4 py-8 mx:auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 m-auto w-[80%]">
                <div className="mr-auto place-self-center lg:col-span-7">
                    <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl text-center">Web Developer</h1>
                    <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-secondaryText">I am a full stack web developer who utilizes a robust tech stack for creating dynamic applications. I utilize React to create a dynamic front end, while creating efficient RESTful APIs on the backend, connecting them together with MongoDB, and PostgreSQL.</p>
                    <div className='home-btn-container'>
                        <BtnComponent text={resumeText} download={RyanCuthbert} resumeHref={href} />

                        <a rel='noopener' target='_blank' href="https://github.com/Ryan3389" className="px-5 py-3 font-medium  border border-btnBorder bg-btnBackground rounded-lg mx-5 hover:bg-btnHover">GitHub</a>
                    </div>

                </div>
                <div className="mx-10 lg:mt-0 lg:col-span-5 lg:flex">
                    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <img src={RyanCuthbert} alt="Ryan Cuthbert Picture" className='home-page-img' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage