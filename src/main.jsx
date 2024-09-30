import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Project from './pages/Project.jsx'
import Error from './pages/Error.jsx'
import ArticlePage from './pages/ArticlePage.jsx'
import ProjectIndividual from './components/Projects/ProjectIndividual.jsx'
import Contect from './pages/Contect.jsx'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: '/projects',
      element: <Project />
    },
    {
      path: '/article',
      element: <ArticlePage />
    },
    {
      path: '/contect',
      element: <Contect />
    },
    {
      path: '/projects/:projectid',
      element: <ProjectIndividual />
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
