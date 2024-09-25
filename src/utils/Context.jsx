import { createContext, useState } from "react";
import weatherApp from '../../src/images/weatherApp.png'
import blog from '../../src/images/blog.png'
import socialNetworkApi from '../../src/images/socialNetworkApi.png'
import sqlCompanyManager from '../../src/images/sqlCompanyManager.png'
export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [projectData] = useState([
        {
            heading: "Weather App",
            image: weatherApp,
            description: "A dynamic weather application that utilizes the OpenWeather API to provide real-time weather updates and a 5-day forecast for any city. The app features search history saving, allowing users to quickly access weather details from previous searches, and offers clickable search results for instant weather information retrieval.",
            link: "https://github.com/Ryan3389/Weather-Forecast-App",
        },
        {
            heading: "Blog",
            image: blog,
            description: "A responsive blog interface where users can add their username and post messages, with submissions displayed dynamically on the page. The project includes a toggle feature to switch between dark and light themes, offering a personalized user experience. Built using modern frontend technologies for a clean and intuitive design.",
            link: 'https://github.com/Ryan3389/Ryan-Cuthbert-Blog'
        },
        {
            heading: 'SQL Company Manager',
            image: sqlCompanyManager,
            description: "A command-line application for managing a company's departments, roles, and employees using a SQL database. Users can view all departments, roles, and employees, as well as add new departments, roles, and employees. Additionally, the app allows users to update employee roles, streamlining company organization and employee management.",
            link: "https://github.com/Ryan3389/sql-company-manager"
        },
        {
            heading: 'Social Network API',
            image: socialNetworkApi,
            description: "A backend API for a social networking platform, allowing users to create profiles, post comments.",
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