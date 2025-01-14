import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, Outlet, RouterProvider } from 'react-router-dom'
import './index.css'
import Educacion from './Pages/Educacion/Educacion.tsx'
import Inicio from './Pages/Inicio/Inicio.tsx'
import Proyectos from './Pages/Proyectos/Proyectos.tsx'
import SobreMi from './Pages/Sobre mi/SobreMi.tsx'
import Navbar from './components/Navbar/navbar.tsx'

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
)

const router = createHashRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Inicio /> },
      { path: '/Aboutme', element: <SobreMi /> },
      { path: '/Proyects', element: <Proyectos /> },
      { path: '/Skills', element: <Educacion /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
