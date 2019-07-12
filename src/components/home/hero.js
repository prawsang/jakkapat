import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import background from "../../assets/viet_noodle/hero_bg.svg"
import heroHead from "../../assets/viet_noodle/hero_head.png"
import heroDet from "../../assets/viet_noodle/hero_details.png"

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
      <div className="hero-viet-noodle">
        <div className="hero-background">
          <img src={background} alt="" />
        </div>
        <div className="container narrow">
          <div className="hero-head">
            <img src={heroHead} className="hero-head" />
          </div>
          <Img
            fluid={data.header.childImageSharp.fluid}
            className="hero-image"
          />
          <img src={heroDet} className="hero-details" />
        </div>
      </div>
    )}
  />
)

export default Hero
