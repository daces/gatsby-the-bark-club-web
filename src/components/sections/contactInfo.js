import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ContactInfo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "contact-dog.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <ContactWrapper>
      <ContactInner>
        <Title>
          Let's Talk <br />
          about
          <br />
          Your Pet
        </Title>

        <SubTitle>Call Us At:</SubTitle>
        <Content>987-654-3210</Content>

        <SubTitle>Email:</SubTitle>
        <Content>contact@info.com</Content>

        <SubTitle>Address:</SubTitle>
        <Content>123 Fifth Avenue, New York, NY 10160</Content>
        <StyledImage
          style={{ position: "absolute" }}
          fluid={data.file.childImageSharp.fluid}
        />
      </ContactInner>
    </ContactWrapper>
  )
}
export default ContactInfo

const ContactWrapper = styled.div`
  position: relative;
`
const ContactInner = styled.div`
  max-width: 600px;
  margin: 8em auto 0;
  padding: 4em;
  background: #f0f2f3;
`
const Title = styled.h2`
  font-size: 4em;
  line-height: 1em;
`
const SubTitle = styled.h4`
  margin: 0;
`

const Content = styled.p``
const StyledImage = styled(Img)`
  width: 300px;
  position: absolute;
  bottom: -50px;
  right: -60px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 200px;
  }
`
