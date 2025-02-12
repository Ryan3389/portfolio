import { createContext, useState } from "react";
import TrackFinder from '../images/TrackFinder.png'
import BookQuest from '../images/BookQuest.png'
import NewsHub from '../images/NewsHub.png'
import TastyTable from '../images/TastyTable.png'
export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [projectData] = useState([
        {
            heading: "TrackFinder",
            image: TrackFinder,
            description: "TrackFinder is a simple and efficient CRUD API that allows users to search for music using the iTunes API",
            link: "https://github.com/Ryan3389/TrackFinder",
        },
        {
            heading: "BookQuest",
            image: BookQuest,
            description: "BookQuest is a simple an efficient is a simple and efficient CRUD application that allows users to search for books, and browse through different genres.",
            link: 'https://github.com/Ryan3389/Book-Explorer'
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