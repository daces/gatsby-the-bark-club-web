import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import AboutSection from "../components/sections/about"
import Footer from "../components/sections/footer"

const IndexPage = () => {
const data = useStaticQuery(graphql`
query {
  file(relativePath: { eq: "homepage-bg.png" }) {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
    publicURL
  }
}
`)

return (
  <Layout>
    <SEO title="Home" />
    <Navigation bgColor="#000" bgColor2="#550049" fontColor="#fff"/>
    <Header 
        headerImage={data.file.childImageSharp.fluid} 
        headerBGColor="#000"
        headerFColor="#fff" 
        headerFColor2="#fff"
        headerH2BGC="#000"
        />
    <AboutSection />
    <Footer bgColor3="#000"/>
  </Layout>
)  
}

export default IndexPage
