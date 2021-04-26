import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  EmailButton,
  InstagramlButton,
  FacebookButton,
} from "../common/layout/sharedComponents"
import styled from "styled-components"

const Location = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "location.png" }) {
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
    <LocationGrid>
      <LocationItem>
        <SocialMedia id="social">
          <h2>Share</h2>
          <Fbutton>
            <FacebookButton />
          </Fbutton>
          <Ibutton>
            <InstagramlButton />
          </Ibutton>
          <Ebutton>
            <EmailButton />
          </Ebutton>
        </SocialMedia>
      </LocationItem>
      <LocationItem>
        <h2>Where to find us?</h2>
        <a aria-label="open map" href={data.file.publicURL}>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
        </a>
      </LocationItem>
      <LocationItem>
        <h4>Opening Hours:</h4>
        <p>
          Monday : 10am – 6pm
          <br />
          <br />
          Tuesday: 10am – 6pm
          <br />
          <br />
          Wednesday: Closed
          <br />
          <br />
          Thursday: 10am – 6pm
          <br />
          <br />
          Friday: 10am – 6pm
          <br />
          <br />
          Saturday: 10am – 6pm
          <br />
          <br />
          Sunday: Closed
        </p>
      </LocationItem>
    </LocationGrid>
  )
}
export default Location
const LocationGrid = styled.div`
  margin: 150px 0 0 0;
  display: grid;
  grid-template-columns: 20% 50% 30%;
  grid-column-gap: 20px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
  }
`

const LocationItem = styled.div`
  align-items: flex-start;
  justify-content: flex-end;
  &:first-of-type {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:last-of-type {
    display: flex;
    flex-flow: column;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    &:first-of-type {
      display: none;
    }
  }
`

const StyledImage = styled(Img)`
  width: 100%;
`

const SVGSize = 32
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
    color: #fc1717;
  }
  svg {
    width: ${SVGSize}px;
    height: ${SVGSize}px;
    fill: #fc1717;
  }
`
const Fbutton = styled.div``
const Ebutton = styled.div``
const Ibutton = styled.div``
