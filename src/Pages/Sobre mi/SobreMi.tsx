import React, { useEffect, useRef, useState } from 'react'
import Typed from 'typed.js'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { MdOutlineFileDownload } from 'react-icons/md'
import cv from '../../assets/Resume_JuanCubillos_Fronted.pdf'
import './SobreMi.css'

import { IoIosSend } from 'react-icons/io'

const SobreMi = () => {
  const [isHovered, setIsHovered] = useState(false)
  const form = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    const typed = new Typed('.about-text', {
      strings: ['Frontend Developer'],
      typeSpeed: 90,
      backSpeed: 100,
      backDelay: 1000,
      loop: false,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (form.current) {
      emailjs
        .sendForm(
          'service_nwh8woh',
          'template_ezinlo8',
          form.current,
          '6y3-YWeuC72FEFmbM'
        )
        .then(
          () => {
            Swal.fire({
              title: 'Email sent!',
              text: "I'll get back to you soon.",
              icon: 'success',
              confirmButtonText: 'OK',
            })
          },
          error => {
            console.log('FAILED...', error.text)
          }
        )
    }
  }

  return (
    <div className="about-contact-container">
      {/* Sección About */}
      <div className="about-section">
        <div className="about-card">
          <h1 className="about-title">About Me</h1>
          <p>
            <span className="about-text">Frontend Developer</span>
          </p>
          <p className="about-description">
            Results-driven Front-end Developer with a strong passion for
            delivering exceptional user experiences.
          </p>
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            className={`download-btn ${isHovered ? 'hovered' : ''}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <MdOutlineFileDownload className="download-icon" />
            Download CV
          </a>
        </div>
      </div>

      {/* Sección Contact */}
      <div className="contact-section">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2 className="contact-title">Contact Me</h2>
          <label className="form-label">Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="Enter your name"
            className="form-input"
          />
          <label className="form-label">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email"
            className="form-input"
          />
          <label className="form-label">Message</label>
          <textarea
            name="message"
            placeholder="Write your message here"
            className="form-textarea"
          ></textarea>
          <button type="submit" className="form-button">
            <div className="send-button">
              <IoIosSend className="send-icon" />
              Send
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}

export default SobreMi
