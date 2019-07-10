/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "normalize.css/normalize.css"
import "../style/index.scss"
import logo from "../assets/logo_light.svg"

class Layout extends React.Component {
  state = {
    showMenu: false,
  }
  render() {
    return (
      <div>
        <h1>Hello World.</h1>
        <img src={logo} alt="Logo" />
        {this.props.children}
      </div>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
