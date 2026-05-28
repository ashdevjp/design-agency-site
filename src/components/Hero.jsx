'use client'

import { useState, useEffect } from 'react'

const phrases = [
  "Designing Ideas that Define your Identity",
  "We Design Stunning Interfaces",
  "We Craft Pixel Perfect UI",
]

const Typewriter = () => {
  const [text, setText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]

    const timeout = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1500)
        }
      } else {
        setText(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
        if (charIndex - 1 === 0) {
          setDeleting(false)
          setPhraseIndex(i => (i + 1) % phrases.length)
        }
      }
    }, deleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, phraseIndex])

  return (
    <span className="typewriter">
      {text}<span className="cursor">_</span>
    </span>
  )
}

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="hero-tag">Digital Design Agency</p>
        <h1 className="hero-title">
          <Typewriter />
        </h1>
            <div className="hero-visual"></div>
            <div className='hero-visual2'></div>
        <p className="hero-subtitle">
          We transform ideas into stunning digital products. 
          From UI design to full stack development — 
          we build experiences people remember.
        </p>
        <div className="hero-buttons">
          <a href="#portfolio" className="btn btn-primary">
            View Our Work
          </a>
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <h3>50+</h3>
            <p>Projects Done</p>
          </div>
          <div className="stat">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>3+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        
      </div>
    </section>
  )
}

export default Hero