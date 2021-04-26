import React from "react"
import {useStaticQuery, graphql} from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import {  EmailButton, InstagramlButton, FacebookButton} from "../common/layout/sharedComponents"

const ImageGallery = () => {
const data = useStaticQuery(graphql`
query{
    allFile(filter: {relativeDirectory: {eq: "gallery"}}) {
        edges{
            node {
                childImageSharp{
                    fluid(maxWidth:1000){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        totalCount
    }
}
`)
// data.allFile.edges.forEach(element => {
//     console.log( element.node.childImageSharp.fluid)
// })
return (
    <GalleryGrid>
    <GalleryItem>
        {data.allFile.edges.map((images, idx ) => (
              <StyledImage key={idx} fluid={images.node.childImageSharp.fluid} />
        )) }
    </GalleryItem>
    <GalleryItem>
    <SocialMedia id="social">
    <h2>Share</h2>
    <Fbutton><FacebookButton /></Fbutton>
    <Ibutton><InstagramlButton /></Ibutton>
    <Ebutton><EmailButton /></Ebutton>
    </SocialMedia>
    </GalleryItem>
    <GalleryItem>
        
    </GalleryItem>
    </ GalleryGrid>

)
}
export default ImageGallery;

const GalleryGrid = styled.div`
display: grid;
grid-template-columns: 1fr 10% ;
grid-column-gap: 20px;
margin: 160px 20px;
`
const GalleryItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-flow: column;
row-gap: 20px;
`
const StyledImage = styled(Img)`
width:100%;
min-width: 300px;
max-width: 600px;
`
const SVGSize = 32;
const IconsColor = "#FAA7CD";
const SocialMedia = styled.div`
text-align: center;
h2 {
font-size: ${SVGSize}px;
text-orientation: mixed;
-webkit-writing-mode: vertical-rl;
-ms-writing-mode: tb-rl;
writing-mode: vertical-rl;
margin: 0 auto 20px;
text-transform: uppercase;
color: ${IconsColor};
}
svg {
width: ${SVGSize}px;
height: ${SVGSize}px;
fill: ${IconsColor};
}
`
const Fbutton = styled.div`


`
const Ebutton = styled.div`


`
const Ibutton = styled.div`

`