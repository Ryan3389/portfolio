import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx';
// import ResumePage from './pages/ResumePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>Error Page</h1>,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/projects',
        element: <ProjectsPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: "/about",
        element: <AboutPage />
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
