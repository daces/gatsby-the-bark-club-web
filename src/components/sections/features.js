import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import {useStaticQuery, graphql} from "gatsby";

import { Section, Container } from "../global"

const Features = () => {
const data = useStaticQuery(graphql`
query{ 
  smallDog: file(relativePath: {eq: "small-dogs.png"}) {childImageSharp {fluid(maxWidth: 300) {...GatsbyImageSharpFluid}}}
  mediumDog: file(relativePath: {eq: "medium-dogs.png"}) {childImageSharp {fluid(maxWidth: 300) {...GatsbyImageSharpFluid}}}
  largeDog: file(relativePath: {eq: "large-dogs.png"}) {childImageSharp {fluid(maxWidth: 300) {...GatsbyImageSharpFluid}}}

  dayCare: file(relativePath: {eq: "day-care.png"}) {childImageSharp {fluid(maxWidth: 300) {...GatsbyImageSharpFluid}}}
  clawClip: file(relativePath: {eq: "claw-clip.png"}) {childImageSharp {fluid(maxWidth: 300) {...GatsbyImageSharpFluid}}}
  freeWash: file(relativePath: {eq: "free-wash.png"}) {childImageSharp {fluid(maxWidth: 300) {...GatsbyImageSharpFluid}}}

}
`)
return (
  <Section id="features">
    <StyledContainer>
      <SectionTitle>Services: Full Groom</SectionTitle>
      <FeaturesGrid >
<FeatureTitle>Bath and Blow Dry
Breed Standard and Pet trimming
</FeatureTitle>
          <FeatureTitle>Hand Stripping
Ear-plucking and cleaning
</FeatureTitle>
<FeatureTitle>Nail-Clipping
Brushing and de-matting</FeatureTitle>
<FeatureItem>
<FeatureItemImage fluid={data.smallDog.childImageSharp.fluid}/>
<FeatureItemTitle>
Small dogs
</FeatureItemTitle>
<FeatureText>
35£ (approx.)
</FeatureText>
</FeatureItem>
        <FeatureItem className="highlight">
<FeatureItemImage fluid={data.mediumDog.childImageSharp.fluid}/>
          <FeatureItemTitle>
          Medium dogs
          </FeatureItemTitle>
          <FeatureText>
          45£ (approx.)
          </FeatureText>
        </FeatureItem>
<FeatureItem>
<FeatureItemImage fluid={data.largeDog.childImageSharp.fluid}/>
<FeatureItemTitle>
Large dogs
</FeatureItemTitle>
<FeatureText>
55£ (approx.)
</FeatureText>
</FeatureItem>
        <FeatureItem>
          <FeatureItemImage fluid={data.dayCare.childImageSharp.fluid}/>
          <FeatureItemTitle>Day Care</FeatureItemTitle>
          <FeatureText>
          We also offer a £25 all-day créche service which includes an hour-long walk through Acton Park (pictured).
(Rates are negotiable for differing client needs)
          </FeatureText>
        </FeatureItem>
<FeatureItem>
<FeatureItemImage fluid={data.clawClip.childImageSharp.fluid}/>
<FeatureItemTitle>Claw Clipping</FeatureItemTitle>
<FeatureText><span role="img" aria-label="Image">⚫</span>Bath and Blow Dry<br/>
<span role="img" aria-label="Image">⚫</span>Breed Standard and Pet trimming<br/>
<span role="img" aria-label="Image">⚫</span>Hand Stripping<br/>
<span role="img" aria-label="Image">⚫</span>Ear-plucking and cleaning<br/>
<span role="img" aria-label="Image">⚫</span>Nail-Clipping<br/>
<span role="img" aria-label="Image">⚫</span>Brushing and de-matting</FeatureText>
</FeatureItem>
        <FeatureItem>
          <FeatureItemImage fluid={data.freeWash.childImageSharp.fluid}/>
          <FeatureItemTitle>Free Puppy Wash</FeatureItemTitle>
          <FeatureText>
          We offer a FREE PUPPY WASH for pups aged between 4 and 6 months.

This is a perfect way to get them accustomed to being groomed from a young age (dependent on breed).
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)
}

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
color: ${props => props.theme.color.primary};
display: flex;
justify-content: center;
margin: 0 auto 40px;
text-align: center;
`

const FeaturesGrid = styled.div`
max-width: 800px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
margin: 0px auto;
grid-column-gap: 20px;
grid-row-gap: 35px;
@media (max-width: ${props => props.theme.screen.sm}) {
  grid-template-columns: 1fr;
  padding: 0 64px;
}
`

const FeatureItem = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
flex-direction: column;
padding: 20px 20px;
&:hover {
background: #EF79C3;
color: #fff;
animation: scalee .3s forwards;
z-index: 9999;
}

@keyframes scalee {
  to { transform: scale(1.2);}
}
`

const FeatureTitle = styled.p`
color: ${props => props.theme.color.primary};
letter-spacing: 0px;
line-height: 30px;
margin-bottom: 10px;
font-weight: bold;
text-align: center;
`
const FeatureItemTitle = styled.p`
font-weight: bold;
letter-spacing: 0px;
line-height: 30px;
margin-bottom: 10px;
`
const FeatureText = styled.p`
text-align: left;
font-size: 12px;

`
const FeatureItemImage = styled(Img)`
width: 100px;
`