import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Hero = props => (
  <StaticQuery
    query={graphql`
      query {
        header: file(relativePath: { eq: "viet_noodle/hero_img.png" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <div className="hero-wrapper">
        <Img
          fluid={data.header.childImageSharp.fluid}
        />
        <h1>Header</h1>
      </div>
    )}
  />
)

export default Hero
