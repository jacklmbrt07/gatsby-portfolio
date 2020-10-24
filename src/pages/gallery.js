import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const photoStyle = {


  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr ",
  gridGap: '2em',
  

  flexWrap: "wrap",
  padding: "0 4px",
  flex: "50%",
  margin: "40px 30px",
  justifyContent: "space-around",
  alignContent: "space-evenly",
}




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
                relativeDirectory: { eq: "images" }
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
          <div className="photoContainer" id="photos" style={photoStyle}>
            {data.allFile.edges.map(edge => (
              <div style={{ alignSelf: 'center'}}>
                <Zoom zoomMargin={20} wrapStyle={{ display: "inherit" }}>
                <Img
                  fluid={edge.node.childImageSharp.fluid}
                  alt={edge.node.name}
                  style={{ border: "1px solid black", maxHeight: '100%', alignSelf: 'center'}}
                />

              </Zoom>
                </div>
            ))}
          </div>
        )}
      />
    </Layout>
  )
}

export default GalleryPage
