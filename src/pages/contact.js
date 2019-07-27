import React from "react"

import Layout from "../layout/"
import Contact from "../components/contact"
import SEO from "../components/seo"

import keywords from "../data/keywords"

const ContactPage = props => (
    <Layout transparentNav={false}>
        <SEO title="Contact" keywords={keywords} />
        <Contact />
    </Layout>
)

export default ContactPage
