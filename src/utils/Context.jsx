import { createContext, useState } from "react";
import marketplace from '../images/marketplace.png'
import resumePro from '../images/resumePro.png'
import TuneFlow from '../images/TuneFlow.png'
export const DataContext = createContext()


export const DataProvider = ({ children }) => {
    const [projectData] = useState([
        {
            heading: "Marketplace",
            image: marketplace,
            description: "Marketplace, powered by Stripe, allows users to browse categories, and make secure payments",
            link: "https://github.com/Ryan3389/ecommerce-marketplace",
        },
        {
            heading: "ResumePro",
            image: resumePro,
            description: "ResumePro, powered by OpenAI, allows users to recieve AI generated feedback, providing users with educational resources for self improvement",
            link: 'https://github.com/Ryan3389/resume-assist'
        },
        {
            heading: 'TuneFlow',
            image: TuneFlow,
            description: "TuneFlow, powered by the iTunes API, brings you the latest music by the biggest stars.",
            link: "https://github.com/Ryan3389/TuneFlow"
        },

    ]);

    const [skillsData] = useState([
        {
            heading: "Front End",
            description: 'I have extensive experience in designing and developing visually engaging user interfaces using cutting-edge technologies.',
            skills: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {

            heading: 'Server-Side',
            description: 'I specialize in building scalable and efficient server-side architectures using modern technologies',
            skills: ['Node.JS', 'Express.JS', 'GraphQL', 'REST API']
        },
        {
            heading: 'Backend',
            description: 'I have a strong expertise in developing robust and scalable backend solutions with modern technologies',
            skills: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Sequelize']
        }
    ]);

    return (
        <DataContext.Provider value={{ projectData, skillsData }}>
            {children}
        </DataContext.Provider>

    )
}