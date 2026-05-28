const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2 className="footer-logo">FORXEL<span>DESIGN</span></h2>
          <p className="footer-tagline">
            We build digital experiences that stand out.
            From stunning UI to full stack solutions.
          </p>
        </div>

        <div className="footer-links-group">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">UI/UX Design</a></li>
            <li><a href="#services">Web Development</a></li>
            <li><a href="#services">Digital Marketing</a></li>
            <li><a href="#services">Mobile Design</a></li>
          </ul>
        </div>

        <div className="footer-links-group">
          <h4>Connect</h4>
          <ul>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="mailto:hello@forxeldesign.com">Email Us</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {currentYear} ForxelDesign. All rights reserved.</p>
        <p>Built with Next.js</p>
      </div>
    </footer>
  )
}

export default Footer