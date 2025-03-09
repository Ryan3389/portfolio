import ResumeComponent from "../components/ResumeComponent"
import BtnComponent from '../components/BtnComponent'
import resume from '../assets/resume.pdf'

const ResumePage = () => {

    return (
        <section className="bg-backgroundColor text-secondaryColor h-[90vh] resume-section">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <article className="flex flex-col items-center m-auto max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl  font-extrabold">Download my Resume</h2>

                    <BtnComponent text="Resume" download="Ryan_Cuthbert_Resume" resumeHref={resume} />
                </article>
                <ResumeComponent />
            </div>
        </section>
    )
}
export default ResumePage