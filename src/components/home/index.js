import React from "react"
import Hero from "./hero"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = ({ name, className, style }) => (
  <StaticQuery
    query={graphql`
      query {
        choppingBoard: file(relativePath: { eq: "viet_noodle/chopping_board_dark.png" }) {
          ...fixed250
        }
      }
    `}
    render={data => (
      <Img
        fixed={data[name].childImageSharp.fixed}
        className={className}
        style={style}
      />
    )}
  />
)

const HomePage = () => (
  <React.Fragment>
    <Hero />
    <Image name="choppingBoard" />
  </React.Fragment>
)

export default HomePage
