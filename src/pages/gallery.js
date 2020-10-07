import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Maximize } from "react-feather"

const GalleryPage = () => {
  return (
    <Layout>
      <SEO title="Gallery" />
      <StaticQuery
        query={graphql`
          {
            allFile(
              filter: {
                extension: { regex: "/(jpg)|(jpeg)|(png)/" }
                relativeDirectory: { eq: "australia" }
              }
            ) {
              edges {
                node {
                  id
                  name
                  relativePath
                  birthTime
                  childImageSharp {
                    fluid {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                      aspectRatio
                      src
                      srcSet
                      sizes
                      presentationWidth
                      presentationHeight
                    }
                  }
                }
              }
            }
          }
        `}
        render={data => (
          <div class="photography">
            {data.allFile.edges.map(edge => (
              <Img
                fluid={edge.node.childImageSharp.fluid}
                alt={edge.node.name}
                style={{ maxWidth: 300 }}
              />
            ))}
          </div>
        )}
      />
      Hello World
    </Layout>
  )
}

export default GalleryPage
