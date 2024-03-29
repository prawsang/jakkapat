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
import 'sal.js/dist/sal.css';

import Nav from "../components/nav"
import Footer from "../components/footer"

require('intersection-observer');

class Layout extends React.Component {
  render() {
    const { transparentNav, grayFooter } = this.props;
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <div>
            <Nav transparent={transparentNav} />
            {this.props.children}
          </div>
          <Footer gray={grayFooter} />
        </div>
      </React.Fragment>
    )
  }
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
