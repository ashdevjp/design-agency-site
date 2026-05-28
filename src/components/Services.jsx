'use client';

import { Palette, Code, Smartphone, BarChart } from 'lucide-react';

const services = [
  {
    icon: Palette,  
    title: "UI/UX Design",
    description: "We craft beautiful, intuitive interfaces that users love. From wireframes to polished designs — every pixel matters.",
    color: "#ab5bec"
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Modern, fast and scalable web applications built with React and Next.js. Clean code, great performance.",
    color: "#5353f9"
  },
  {
    icon: BarChart,
    title: "Digital Marketing",
    description: "Strategic digital marketing that drives real results. SEO, social media and content that converts.",
    color: "#096a06"
  },
  {
    icon: Smartphone,
    title: "Mobile Design",
    description: "Responsive designs that work beautifully across all devices. Mobile first approach always.",
    color: "#284bc8"
  },
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="section-header">
        <p className="section-tag">✦ What We Do</p>
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          We offer end to end digital solutions to help your 
          business stand out in the digital world.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div 
              className="service-icon"
              style={{ color: service.color, 
                       background: `${service.color}15` }}
            >
              <service.icon />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">
              {service.description}
            </p>
            <a href="#contact" className="service-link">
              Learn More →
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services