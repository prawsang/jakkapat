import React from "react"

import Layout from "../layout/"
import Home from "../components/home"
import SEO from "../components/seo"

import keywords from "../data/keywords"

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={keywords} />
    <Home />
  </Layout>
)

export default IndexPage
