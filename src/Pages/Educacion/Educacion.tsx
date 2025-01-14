import React from 'react'
import './Educacion.css'
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from 'react-icons/fa'
import { SiNestjs, SiRedux, SiTypescript } from 'react-icons/si'
import { RiNextjsFill } from 'react-icons/ri'
import { DiPostgresql } from 'react-icons/di'

interface Event {
  title: string
}

const Educacion: React.FC = () => {
  const events: Event[] = [
    { title: 'HTML' },
    { title: 'CSS' },
    { title: 'JavaScript' },
    { title: 'Ultimate JavaScript' },
    { title: 'TypeScript' },
    { title: 'React' },
    { title: 'GIT + GitHub' },
    { title: 'SQL' },
  ]

  const logos = [
    <FaReact style={{ color: '61dbfb' }} />,
    <SiTypescript style={{ color: '#007acc' }} />,
    <FaJs style={{ color: 'F0DB4F' }} />,
    <FaHtml5 style={{ color: '#F06529' }} />,
    <FaCss3Alt style={{ color: '#2965f1' }} />,
    <FaGitAlt style={{ color: 'red' }} />,
    <SiRedux style={{ color: 'gray' }} />,
    <RiNextjsFill
      style={{
        color: 'black',
        backgroundColor: 'white',
        borderRadius: '100%',
        border: 'none',
      }}
    />,
    <DiPostgresql style={{ color: '#0064a5' }} />,
    <FaNodeJs style={{ color: '#68a063' }} />,
    <SiNestjs style={{ color: 'red' }} />,
  ]

  return (
    <>
      <div className="timeline-container">
        <h1 className="timeline-title">Education Timeline</h1>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-events">
            {events.map((event, index) => (
              <div key={index} className="timeline-event">
                {event.title}
              </div>
            ))}
          </div>
        </div>
        <h1 className="skills-title">Skills</h1>
        <div className="marquee-container">
          <div className="marquee">
            {[...logos, ...logos].map((logo, index) => (
              <div key={index} className="marquee-item">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Educacion
