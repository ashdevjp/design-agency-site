'use client'

import { useState } from 'react'
import Image from 'next/image'

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Full featured online store with cart, payments and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    tags: ["React", "Next.js", "Tailwind"],
    color: "#ab5bec"
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    description: "Clean and intuitive dashboard for tracking investments and expenses.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    tags: ["Figma", "React", "Chart.js"],
    color: "#f7c948"
  },
  {
    title: "Travel App",
    category: "Mobile Design",
    description: "Beautiful travel booking app with smooth animations and great UX.",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80",
    tags: ["React Native", "UI Design"],
    color: "#61dafb"
  },
  {
    title: "Restaurant Website",
    category: "Web Development",
    description: "Modern restaurant website with online ordering and reservation system.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=80",
    tags: ["Next.js", "Tailwind", "CSS"],
    color: "#28c840"
  },
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete brand identity design including logo, colors and guidelines.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    tags: ["Figma", "Illustrator", "Branding"],
    color: "#ff5f57"
  },
  {
    title: "SaaS Landing Page",
    category: "Web Development",
    description: "High converting SaaS landing page with animations and clear CTAs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    tags: ["React", "Framer Motion", "Tailwind"],
    color: "#ff9f43"
  },
]

const categories = ["All", "Web Development", "UI/UX Design", "Mobile Design", "Branding"]

const Portfolio = () => {
  const [active, setActive] = useState("All")

  const filtered = active === "All"
    ? projects
    : projects.filter(p => p.category === active)

  return (
    <section className="portfolio" id="portfolio">
      <div className="section-header">
        <p className="section-tag">✦ Our Work</p>
        <h2 className="section-title">Portfolio</h2>
        <p className="section-subtitle">
          A selection of our recent work across design,
          development and branding.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="portfolio-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="portfolio-grid">
        {filtered.map((project, index) => (
          <div key={index} className="portfolio-card">
            <div className="portfolio-image">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="portfolio-img"
              />
              <div className="portfolio-overlay">
                <div className="overlay-content">
                  <p className="overlay-category">
                    {project.category}
                  </p>
                  <h3 className="overlay-title">
                    {project.title}
                  </h3>
                  <p className="overlay-description">
                    {project.description}
                  </p>
                  <div className="overlay-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="overlay-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="portfolio-info">
              <div
                className="portfolio-dot"
                style={{ background: project.color }}
              />
              <div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-category">{project.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Portfolio