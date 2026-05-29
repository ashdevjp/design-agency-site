'use client'

import { useState } from 'react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [sent, setSent] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) 
      newErrors.email = 'Enter a valid email'
    if (!form.message.trim()) 
      newErrors.message = 'Message is required'
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSent(true)
  }

  return (
    <section className="contact" id="contact">
      <div className="section-header">
        <p className="section-tag">Get In Touch</p>
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Have a project in mind? Let&apos;s talk about it.
          We&apos;d love to hear from you.
        </p>
      </div>

      <div className="contact-wrapper">

        {/* Left side info */}
        <div className="contact-info">
          <div className="info-item">
            <span className="info-icon"></span>
            <div>
              <h4>Email</h4>
              <p>hello@forxeldesign.com</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon"></span>
            <div>
              <h4>Location</h4>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
          </div>
          <div className="info-item">
            <span className="info-icon"></span>
            <div>
              <h4>Working Hours</h4>
              <p>Mon – Fri, 9AM – 6PM</p>
            </div>
          </div>

          <div className="info-socials">
            <a href="#" className="social-pill">Facebook</a>
            <a href="#" className="social-pill">Instagram</a>
          </div>
        </div>

        {/* Right side form */}
        <div className="contact-form-wrapper">
          {sent ? (
            <div className="success-box">
              <span className="success-icon">✅</span>
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. 
                 We&apos;ll get back to you soon.</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setSent(false)
                  setForm({ name: '', email: '', message: '' })
                }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && (
                  <span className="error-msg">{errors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && (
                  <span className="error-msg">{errors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className={errors.message ? 'error' : ''}
                />
                {errors.message && (
                  <span className="error-msg">{errors.message}</span>
                )}
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                Send Message →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contact