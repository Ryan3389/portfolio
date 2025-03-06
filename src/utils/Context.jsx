import { createContext, useState } from "react";
import marketplace from '../images/marketplace.png'
import resumePro from '../images/resumePro.png'
import NewsHub from '../images/NewsHub.png'
import TastyTable from '../images/TastyTable.png'
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
            heading: 'NewsHub',
            image: NewsHub,
            description: "NewsHub is a simple CRUD application, powered by the news api, allowing users to browse different news articles in different categories.",
            link: "https://github.com/Ryan3389/news"
        },
        {
            heading: 'TastyTable',
            image: TastyTable,
            description: "TastyTable is a simple CRUD application, powered by theMealDB api, allowing users to browse different recipes in different categories.",
            link: "https://github.com/Ryan3389/TastyTable"
        },
    ]);

    const [skillsData] = useState([
        {
            heading: "Front End",
            description: 'Upon completing this program, I have created a series of projects that showcase my extensive knowledge in the following areas',
            skills: ['HTML', 'CSS', 'JavaScript', 'React']
        },
        {
            heading: 'Server-Side',
            description: 'Beyond the front end, I have created a variety of projects showcasing my ability to create robust and efficient backend systems and RESTful APIs using the following technologies:',
            skills: ['Node.JS', 'Express.JS', 'GraphQL', 'REST API']
        },
        {
            heading: 'Backend',
            description: 'Beyond the front end, I have created a variety of projects showcasing my ability to create robust and efficient backend systems and RESTful APIs using the following technologies:',
            skills: ['MongoDB', 'PostgreSQL', 'Mongoose', 'Sequelize']
        }
    ]);

    return (
        <DataContext.Provider value={{ projectData, skillsData }}>
            {children}
        </DataContext.Provider>

    )
}