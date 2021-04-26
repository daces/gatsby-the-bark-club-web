import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Location from "../components/sections/location"
import ContactInfo from "../components/sections/contactInfo"
import Footer from "../components/sections/footer"

const Contact = ({bgColor, bgColor2}) => {
const data = useStaticQuery(graphql`
query{
    file(relativePath: {eq: "contact-bg.png"}){
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
    <Seo title="services" />
    <Navigation bgColor="#FC1717" bgColor2="#FC1717"   fontColor="#fff"/>
    <Header 
        headerImage={data.file.childImageSharp.fluid} 
        headerBGColor="#fff"
        headerFColor="#FC1717" 
        headerFColor2="#FC1717"
        headerH2BGC="#fff"
        />
    <Location />
    <ContactInfo />
    <Footer bgColor3="#FC1717"/>
    </Layout>
)
}

export default Contact;
