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

import Nav from "../components/nav"

class Layout extends React.Component {
  state = {
    showMenu: false,
  }
  render() {
    const { transparentNav } = this.props;
    return (
      <div>
        <Nav transparent={transparentNav} />
        {this.props.children}
      </div>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
