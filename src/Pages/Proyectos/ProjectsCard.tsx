import './Proyectos.css'
import ProjectCard from './ProjectCard'
import Creacion from '../../assets/creacion.png'
import Register from '../../assets/Register.png'
import Login from '../../assets/Login.png'
import Update from '../../assets/Update.png'
import Filter from '../../assets/filter.png'
import Categories from '../../assets/cartegories.png'
import Meal from '../../assets/Meal.png'
import Shop from '../../assets/GameShop.png'
import Sale from '../../assets/GameSale.png'
import Steam from '../../assets/SteamConnect.png'

const projects = [
  {
    title: 'Task Manager App',
    description:
      'The Task Manager App is a tool for organizing and tracking tasks. It includes Authentication & Authorization: Secure login with roles and permissions to control access Task Management: Create, update, and prioritize tasks with due dates and reminders. Task State Management: Track task progress with states like "Pending", "In Progress", and "Completed."Collaboration: Assign tasks, track progress, and receive updates in real time. Reports: View task analytics and export performance reports. The app is responsive, available on both mobile and desktop, and keeps tasks synced across devices.',
    technologies: [
      'NextJs',
      'TailwindCSS',
      'NestJs',
      'TypeORM',
      'PostgreSQL',
      'Axios',
      'Swal',
    ],
    link: '#',
    images: [Creacion, Register, Login, Update], // Lista de imágenes para el carrusel
  },
  {
    title: 'Recipe Finder App',
    description:
      'The Recipe Finder App lets users explore various recipes by searching with keywords or filtering by categories. It uses a third-party recipe API to gather data and offers a user-friendly interface. Key features include keyword search, category filters (e.g., Desserts, Vegetarian), and custom React hooks for efficient data fetching and logic handling. The app is fully responsive, ensuring a smooth experience on both mobile and desktop devices, with dynamic updates based on user interactions with filters or categories.',
    technologies: ['React', 'Zustand', 'Bootstrap', 'Axios', 'API'],
    link: '#',
    images: [Filter, Categories, Meal], // Lista de imágenes
  },
  {
    title: 'Game Store Website',
    description:
      'The Game Store Website is an e-commerce platform where users can browse, purchase, and manage video games. It integrates with an external API to display up-to-date game details and uses Steam for secure payments. Key features include global state management for user data and shopping carts, routing with React Router for seamless navigation, and responsive design for both mobile and desktop users. The website combines API integration, state management, and routing to offer an interactive and smooth shopping experience for gamers.',
    technologies: [
      'React',
      'Chakra UI',
      'React Router',
      'Zustand',
      'Axios',
      'React Query',
      'Steam API',
    ],
    link: '#',
    images: [Shop, Steam, Sale], // Lista de imágenes
  },
]

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
