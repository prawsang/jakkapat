import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image'

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
        background: file(relativePath: { eq: "viet_noodle/wood.png" }) {
          ...fullWidthImage
        }
      }
    `}
    render={data => (
      <BackgroundImage className="hero-viet-noodle dark" fluid={data.background.childImageSharp.fluid}>
        <div className="hero-background">
          <Background />
        </div>
        <div className="container narrow center padding-top is-relative">
          <HeroHead className="hero-head image" />
          <Img
            fluid={data.header.childImageSharp.fluid}
            className="image hero-image"
          />
          <HeroDet className="image hero-details" />
        </div>
        <div className="bottom-shadow" />
      </BackgroundImage>
    )}
  />
)

export default Hero
