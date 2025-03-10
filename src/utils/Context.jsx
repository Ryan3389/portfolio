import { createContext, useState } from "react";
import marketplace from '../images/marketplace.png'
import resumePro from '../images/resumePro.png'
import NewsHub from '../images/NewsHub.png'
import TastyTable from '../images/TastyTable.png'
export const DataContext = createContext()
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLaptop, faDatabase, faServer } from "@fortawesome/free-solid-svg-icons"

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
            heading: 'NewsHub',
            image: NewsHub,
            description: "NewsHub is a simple CRUD application, powered by the news api, allowing users to browse different news articles in different categories.",
            link: "https://github.com/Ryan3389/news"
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