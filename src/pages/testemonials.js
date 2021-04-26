import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import TestemonialsSection from "../components/sections/testemonials"
import Footer from "../components/sections/footer"

const Testemonials = () => {
const data = useStaticQuery(graphql`
query{
    file(relativePath: {eq: "testemonials-bg.png"}) {
        childImageSharp{
            fluid(maxWidth: 1000){
                ...GatsbyImageSharpFluid
            }
        }
    }
}
`)
return (
    <Layout>
    <SEO title="Testemonials"/>
    <Navigation bgColor="#EDB506" bgColor2="#EDB506"  fontColor="#fff"/>
    <Header 
        headerImage={data.file.childImageSharp.fluid} 
        headerBGColor="#000"
        headerFColor="#EDB506" 
        headerFColor2="#EDB506"
        headerH2BGC="#fff"
        />
    <TestemonialsSection />
    <Footer bgColor3="#EDB506"/>
    </Layout>
)
}
export default Testemonials;