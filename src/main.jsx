import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home, ProjectsPage, ArticlesPage, Contact, Error } from './pages'
import { ProjectIndividual, ArticleIndividual, Layout } from './components'
import './styles/global.css'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'projects',
          element: <ProjectsPage />
        },
        {
          path: 'articles',
          element: <ArticlesPage />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'projects/:projectid',
          element: <ProjectIndividual />
        },
        {
          path: 'articles/:articleid',
          element: <ArticleIndividual />
        }
      ]
    }
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
