import React from "react"
import Project from "../components/Project"
import Seo from "../components/Seo"
import Title from "../components/Title"
import { Link } from "gatsby"

const ProjectsPage = ({ projects, title, showLink }) => {
  console.log(projects)
  return (
    <section className="section projects">
      <Title title={title} />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
      {showLink && (
        <Link to="/projects" className="btn center-btn">
          Projects
        </Link>
      )}
    </section>
  )
}

export default ProjectsPage
