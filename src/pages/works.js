import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import { Calendar, GitHub } from "react-feather"
import { SmallText } from "../components/styled/posts"

import {
  ContainerLayout,
  WorkPost,
  Intro,
  SubTitle,
  Title,
  Text,
} from "../components/common/index"

const WorkIndex = ({ data }) => {
  const works = data.allMarkdownRemark.edges

  return (
    <>
      <Layout>
        <SEO title="Showcases" />
        <Intro>
          <ContainerLayout>
            <SubTitle className="text-dark">Selected Work</SubTitle>

            <ContainerLayout className="wrapper">
              {works.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <WorkPost key={node.fields.slug}>
                    <div className="media">
                      <div className="image-wrapper">
                        <Link to={node.frontmatter.url}>
                          <Img
                            fluid={node.frontmatter.image.childImageSharp.fluid}
                            title="work title"
                            alt={node.frontmatter.image}
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="content">
                      <header>
                        <Title>
                          <Link
                            className="text-primary lined-link"
                            style={{ boxShadow: `none` }}
                            to={node.frontmatter.url}
                            target="_blank"
                          >
                            {title}
                          </Link>
                        </Title>
                        <SmallText>
                          <Calendar
                            className="align-middle text-primary"
                            width="18"
                            height="18"
                          />
                          <span className="align-middle">
                            {" "}
                            date published : {node.frontmatter.date}{" "}
                          </span>
                        </SmallText>
                      </header>
                      <Text
                        dangerouslySetInnerHTML={{
                          __html: node.frontmatter.description || node.excerpt,
                        }}
                      />
                      <Link
                        className="github-link"
                        style={{

                        }}
                        to={node.frontmatter.githubRepo}
                        target="_blank"
                      >
                        <GitHub />
                        GitHub
                      </Link>
                    </div>
                  </WorkPost>
                )
              })}
            </ContainerLayout>
          </ContainerLayout>
        </Intro>
      </Layout>
    </>
  )
}

export default WorkIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/(works)/" } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            image {
              childImageSharp {
                fluid(maxWidth: 600, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags
            category
            description
            url
            githubRepo
          }
        }
      }
    }
  }
`
