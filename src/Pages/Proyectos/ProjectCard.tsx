import './Proyectos.css' // Usamos el mismo archivo CSS para los estilos
import React, { useState, useEffect } from 'react'

interface Project {
  title: string
  description: string
  images: string[]
  technologies: string[]
  link: string
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % project.images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [project.images.length])

  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-images">
        <img
          src={project.images[currentImageIndex]}
          alt={`Project ${project.title}`}
        />
      </div>
      <div className="technologies">
        {project.technologies.map((tech, idx) => (
          <span key={idx} className="tech-badge">
            {tech}
          </span>
        ))}
      </div>
      <a href={project.link} className="project-link"></a>
    </div>
  )
}

export default ProjectCard
