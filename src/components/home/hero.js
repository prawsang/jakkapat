import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Background from "../../assets/viet_noodle/hero_bg.svg"
import HeroHead from "../../assets/viet_noodle/hero_head.svg"
import HeroDet from "../../assets/viet_noodle/hero_details.svg"

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
          <Background />
        </div>
        <div className="container narrow">
          <div className="hero-head">
            <HeroHead className="hero-head" />
          </div>
          <Img
            fluid={data.header.childImageSharp.fluid}
            className="hero-image"
          />
          <HeroDet className="hero-details" />
        </div>
      </div>
    )}
  />
)

export default Hero
