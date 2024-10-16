import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Homepage from './pages/Homepage/Homepage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import { action } from './pages/Contact/contactAction.js'
import ReadMore from './pages/About/ReadMore.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Homepage />,
          },
          {
            path: 'about',
            children: [
              {
                index: true,
                element: <About />
              },
              {
                path: ':countryName',
                element: <ReadMore />
              }
            ]
          },
          {
            path: 'contact',
            element: <Contact />,
            action: action
          }
        ]
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <RouterProvider router={router} />
  // </StrictMode>,
)
