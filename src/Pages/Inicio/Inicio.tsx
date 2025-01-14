import { useEffect, useRef } from 'react'
import { CiMail } from 'react-icons/ci'
import { DiCss3, DiHtml5, DiJavascript1 } from 'react-icons/di'
import {
  FaBootstrap,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from 'react-icons/fa'
import { RiTailwindCssFill } from 'react-icons/ri'
import { SiNextdotjs, SiRedux, SiTypescript } from 'react-icons/si'
import Typed from 'typed.js'
import HeaderImage from '../../assets/JuanHome.png'
import './Inicio.css'

const Inicio = () => {
  const textElement = useRef<HTMLHeadingElement | null>(null)
  useEffect(() => {
    if (textElement.current) {
      const typed = new Typed(textElement.current, {
        strings: ['Engineer', 'Frontend Developer', 'Web Developer'],
        typeSpeed: 90,
        backSpeed: 100,
        backDelay: 1000,
        loop: true,
        showCursor: false,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="image-container">
          <img src={HeaderImage} alt="Header" className="header-image" />
        </div>
        <h1 className="tittle">
          Hello, I'm a {''}
          <span className="textElement" ref={textElement}>
            Frontend Developer
          </span>
        </h1>
        <p>
          I'm a passionate frontend developer with a strong passion for
          delivering exceptional user experiences.
        </p>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/juan-esteban-cubillos-acu%C3%B1a-71b058123/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <FaLinkedin className="social-icon" color="#0e76a8" />
          </a>
          <a
            href="https://github.com/JuanCubillos26"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <FaGithub className="social-icon" color="white" />
          </a>
          <a
            href="mailto:juancubillosdev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <CiMail className="social-icon" color="#f2a60c" />
          </a>
          <a
            href="https://wa.me/+573508948336"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <FaWhatsapp className="social-icon" color="#25D366" />
          </a>
        </div>
        <div className="tech-icons">
          <DiHtml5 style={{ color: '#F06529' }} className="tech-icon" />
          <DiCss3 style={{ color: '#2965f1' }} className="tech-icon" />
          <FaNodeJs style={{ color: '#68a063' }} className="tech-icon" />
          <DiJavascript1 style={{ color: 'F0DB4F' }} className="tech-icon" />
          <SiTypescript style={{ color: '#007acc' }} className="tech-icon" />
          <FaReact className="tech-icon" style={{ color: '61dbfb' }} />
          <SiNextdotjs
            style={{
              backgroundColor: '#23273a',
              color: 'black',
            }}
            className="tech-icon"
          />
          <SiRedux style={{ color: '#7D53BF' }} className="tech-icon" />
          <RiTailwindCssFill
            style={{ color: 'rgb(43, 174, 226)' }}
            className="tech-icon"
          />
          <FaBootstrap style={{ color: '#7909F6' }} className="tech-icon" />
        </div>
      </div>
    </>
  )
}

export default Inicio
