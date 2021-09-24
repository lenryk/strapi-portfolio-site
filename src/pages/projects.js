import React from "react"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import Title from "../components/Title"

const ProjectsPage = ({
  data: {
    allStrapiProject: { nodes: projects },
  },
}) => {
  return (
    <>
      <Seo title="Projects" />
      <main>
        <section className="projects-page">
          <Projects title="all projects" projects={projects} />
        </section>
      </main>
    </>
  )
}

export const query = graphql`
  {
    allStrapiProject {
      nodes {
        description
        github
        id
        image {
          id
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, width: 780)
            }
            publicURL
          }
        }
        title
        stack {
          id
          title
        }
        featured
        slug
        url
      }
    }
  }
`

export default ProjectsPage
