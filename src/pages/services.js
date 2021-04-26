import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/common/layout/layout"
import Seo from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import {
  EmailButton,
  InstagramlButton,
  FacebookButton,
} from "../components/common/layout/sharedComponents"

const Services = ({ bgColor, bgColor2 }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "services-bg.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Seo title="services" />
      <Navigation bgColor="#EF79C3" bgColor2="#EF79C3" fontColor="#fff" />
      <Header
        headerImage={data.file.childImageSharp.fluid}
        headerBGColor="#fff"
        headerFColor="#EF79C3"
        headerFColor2="#EF79C3"
        headerH2BGC="#fff"
      />
      <Features />
      <Social id="social">
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
      </Social>
      <Footer bgColor3="#EF79C3" />
    </Layout>
  )
}

export default Services
const socialButtonSize = 90
const socialButtonSizeMobile = 45
const socialGap = 20
const Social = styled.section`
  margin-top: 80px;
  text-align: right;
  position: relative;
  h2 {
    color: #ef79c3;
    display: inline-block;
    position: absolute;
    bottom: 0;
    right: ${socialButtonSize * 3 + socialGap * 3}px;
    margin: 0;
    padding: 0;
    @media (max-width: ${(props) => props.theme.screen.sm}) {
      right: ${socialButtonSizeMobile * 3 + (socialGap * 3) / 2}px;
    }
  }
  svg {
    background: #fff;
    width: ${socialButtonSize}px;
    height: ${socialButtonSize}px;
    fill: #ef79c3;
    @media (max-width: ${(props) => props.theme.screen.sm}) {
      width: ${socialButtonSizeMobile}px;
      height: ${socialButtonSizeMobile}px;
    }
  }
`
const Ebutton = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -15px;
  right: 0;
`
const Fbutton = styled.div`
  display: inline-block;
  position: absolute;
  bottom: -30px;
  right: ${socialButtonSize * 2 + socialGap * 2}px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    right: ${socialButtonSizeMobile * 2 + (socialGap * 2) / 2}px;
  }
`
const Ibutton = styled.div`
  position: absolute;
  bottom: -10px;
  right: ${socialButtonSize + socialGap}px;
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    right: ${socialButtonSizeMobile + socialGap / 2}px;
  }
  display: inline-block;
`
