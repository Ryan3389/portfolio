import { createContext, useState } from "react";
import weatherApp from '../../src/images/weatherApp.png'
import blog from '../../src/images/blog.png'
export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [projectData] = useState([
        {
            heading: "Weather App",
            image: weatherApp,
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: "https://ryan3389.github.io/Weather-Forecast-App/"
        },
        {
            heading: "Blog",
            image: blog,
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: "https://ryan3389.github.io/Ryan-Cuthbert-Blog/"
        },
        {
            heading: 'SQL Company Manager',
            image: blog,
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: "https://github.com/Ryan3389/sql-company-manager"
        },
        {
            heading: 'Social Network API',
            image: blog,
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: "https://github.com/Ryan3389/Social-Network-Api"
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