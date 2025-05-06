import RyanCuthbert from '../../src/images/RyanCuthbert.png'
import resume from '../assets/resume.pdf'
import BtnComponent from '../components/BtnComponent'
import { Link } from 'react-router-dom'
import RevealOnScroll from '../components/RevealOnScroll'

const HomePage = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <RevealOnScroll>

                <div className="grid max-w-screen-xl px-4 py-8 mx:auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 m-auto w-[80%]">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right">Full-Stack Developer</h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">I am a full stack web developer who utilizes a robust tech stack for creating dynamic applications. I utilize React to create a dynamic front end, while creating efficient RESTful APIs on the backend, connecting them together with  PostgreSQL, and MongoDB.</p>
                        <div className="flex justify-center space-x-4">
                            <Link to={"/about"} className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
                                About Me
                            </Link>
                            <Link to={"/contact"} className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
                                Contact Me
                            </Link>
                        </div>

                    </div>
                    <div className="mx-10 lg:mt-0 lg:col-span-5 lg:flex">
                        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                            <img src={RyanCuthbert} alt="Ryan Cuthbert Picture" className='home-page-img' />
                        </div>
                    </div>
                </div>
            </RevealOnScroll>


        </section>
    )
}

export default HomePage
// import RyanCuthbert from '../../src/images/RyanCuthbert.png'
// import resume from '../assets/resume.pdf'
// import BtnComponent from '../components/BtnComponent'

// const HomePage = () => {
//     return (
//         <section className="bg-backgroundColor text-secondaryColor hero-section">
//             <div className="grid max-w-screen-xl px-4 py-8 mx:auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 m-auto w-[80%]">
//                 <div className="mr-auto place-self-center lg:col-span-7">
//                     <h1 className="max-w-2xl mb-4 text-4x font-extrabold l md:text-5xl text-center">Full-Stack Developer</h1>
//                     <p className="max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl text-secondaryText">I am a full stack web developer who utilizes a robust tech stack for creating dynamic applications. I utilize React to create a dynamic front end, while creating efficient RESTful APIs on the backend, connecting them together with MongoDB, and PostgreSQL.</p>
//                     <div className='home-btn-container'>
//                         <BtnComponent text="Resume" download="Ryan_Cuthbert_Resume" resumeHref={resume} />


//                         <a rel='noopener' target='_blank' href="https://github.com/Ryan3389" className="px-5 py-3 font-medium  border border-btnBorder bg-btnBackground rounded-lg mx-5 hover:bg-btnHover cta-btn">GitHub</a>
//                     </div>

//                 </div>
//                 <div className="mx-10 lg:mt-0 lg:col-span-5 lg:flex">
//                     <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
//                         <img src={RyanCuthbert} alt="Ryan Cuthbert Picture" className='home-page-img' />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default HomePage