'use client'

import { useState, useEffect } from 'react'

const phrases = [
  "Designing Ideas that Define your Identity",
  "Stunning Interfaces",
  "Pixel Perfect UI",
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
            <div className="hero-visual1"></div>
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

      <div className="hero-side">
        <div className="brand-text">
          <span className='span1'>FORXEL</span><span>DESIGN</span>
        </div>
      </div>

      <div className="hero-visual">
  <div className="floating-cards">
    
    <div className="float-card card-1">
      <div className="float-card-icon">🚀</div>
      <div>
        <p className="float-card-number">50+</p>
        <p className="float-card-label">Projects Delivered</p>
      </div>
    </div>

    <div className="float-card card-2">
      <div className="float-card-icon">⭐</div>
      <div>
        <p className="float-card-number">98%</p>
        <p className="float-card-label">Client Satisfaction</p>
      </div>
    </div>

    <div className="float-card card-3">
      <div className="float-card-icon">⚡</div>
      <div>
        <p className="float-card-number">2hrs</p>
        <p className="float-card-label">Avg Response Time</p>
      </div>
    </div>

    

  </div>
</div>

      <div className="hero-visual" />
    </section>
  )
}

export default Hero