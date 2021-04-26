import React from "react"
import { useStaticQuery, graphql} from "gatsby"

import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import ImageGallery from "../components/sections/imagesGallery"
import Footer from "../components/sections/footer"

const Gallery = ({bgColor, bgColor2}) => {
const data = useStaticQuery(graphql`
query{
    file(relativePath: {eq: "gallery-bg.png"}){
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
    <Navigation bgColor="#FBD3E5" bgColor2="#FBD3E5" fontColor="#6E6138"/>
    <Header 
        headerImage={data.file.childImageSharp.fluid} 
        headerBGColor="#fff"
        headerFColor="#6E6138" 
        headerFColor2="#6E6138"
        headerH2BGC="#fff"
        />
    <ImageGallery />
    <Footer bgColor3="#FBD3E5"/>
    </Layout>
)
}

export default Gallery;
