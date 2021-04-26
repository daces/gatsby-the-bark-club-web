import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "about-photo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <SectionAbout id="about">
      <AboutContainer>
        <h2>The Bark club</h2>
        <p>
          Conveniently situated only a stone’s throw away from Acton Park, the
          Bark Club provides not only a top-notch grooming service from a City &
          Guilds certified head groomer, but also a créche service for dogs.
        </p>
        <p>
          We take extra-special care with nervous/older dogs; The Bark Club is a
          relaxed grooming environment and every dog’s well-being is important
          to us.
          <br /> <br />
          If dogs could talk, they’d choose The Bark Club!
        </p>
        <p>
          “For as far back as I can remember, I have been surrounded by dogs.
          Brought up in Sweden, my grandparents owned a German Shepherd and a
          Rough Collie with a couple of lovely Poodles. From a very early age I
          was the one doing the feeding, walking and grooming; in time I
          developed a strong affinity with all dogs that stays with me to this
          day.
        </p>
        <p>
          I am now the proud owner of a King Charles Cavalier named Noodle and
          it is through her that my idea came into being. (Good girl, Noodz!)
        </p>
        <p>
          I can think of nothing better than to spend my days together with my
          two daughters (who are part of the team) making the canines of West
          London the talk of the town. So, bring in your dogs and let them be
          pampered. You know it makes sense!”
          <br />
          <br />
          -Carina
        </p>

        <br />
        <br />
        <br />
        <ImageWrapper>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
        </ImageWrapper>
      </AboutContainer>
    </SectionAbout>
  )
}

export default AboutSection

const SectionAbout = styled.div`
  max-width: 600px;
  margin: 0 auto;
`
const AboutContainer = styled.div`
  h2 {
    font-size: 4.768rem;
    text-transform: uppercase;
    @media (max-width: ${(props) => props.theme.screen.sm}) {
      font-size: 2rem;
      line-height: 1em;
    }
  }

  p:first-of-type {
    font-size: 1.25rem;
    font-weight: bold;
  }
`

const ImageWrapper = styled.div``

const StyledImage = styled(Img)``
