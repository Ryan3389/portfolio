import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataProvider = ({ children }) => {
    const [projectData] = useState([
        {
            heading: "Project 1",
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: "https://github.com/Ryan3389"
        },
        {
            heading: "Project 2",
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: "https://github.com/Ryan3389"
        },
        {
            heading: 'Project 3',
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: 'https://github.com/Ryan3389'
        },
        {
            heading: 'Project 4',
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: 'https://github.com/Ryan3389'
        },
        {
            heading: 'Project 5',
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: 'https://github.com/Ryan3389'
        },
        {
            heading: 'Project 6',
            description: "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
            link: '/https://github.com/Ryan3389'
        }
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