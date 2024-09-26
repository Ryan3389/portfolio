import ResumeComponent from "../components/ResumeComponent"
import RyanCuthbert from '../../src/images/RyanCuthbert.png'
import BtnComponent from '../components/BtnComponent'

const ResumePage = () => {
    const resumeText = 'Resume'
    const href = '/RyanCuthbert_resume.pdf'
    return (
        <section className="bg-backgroundColor text-secondaryColor h-[90vh]">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <article className="flex flex-col items-center m-auto max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl  font-extrabold">Download my Resume</h2>
                    <p className="text-secondaryText sm:text-xl mb-5">I recently completed a Coding Bootcamp run by the University of Toronto. I have created a variety of projects, ranging in difficuly, developing my knowledge in the latest technologies</p>
                    {/* <a href="/RyanCuthbert_resume.pdf" download="RyanCuthbert_resume.pdf" className="mt-5 px-5 py-3 font-medium border border-btnBorder bg-btn bg-btnBackground rounded-lg hover:bg-btnHover">Resume</a> */}
                    <BtnComponent text={resumeText} download={RyanCuthbert} resumeHref={href} />
                </article>
                <ResumeComponent />
            </div>
        </section>
    )
}
export default ResumePage