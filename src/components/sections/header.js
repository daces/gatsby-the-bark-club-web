import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { Container } from "../global"
import { ActionButton } from "../../components/common/layout/sharedComponents"
const Header = ({
  headerImage,
  headerBGColor,
  headerFColor,
  headerFColor2,
  headerH2BGC,
}) => {
  return (
    <HeaderWrapper textBGPrim={headerBGColor} id="top">
      <ImageWrapper>
        <StyledImage fluid={headerImage} style={{ position: "none" }} />
      </ImageWrapper>
      <Container>
        <Flex>
          <HeaderTextGroup>
            <TitleShadow textColor={headerFColor}>The Bark Club</TitleShadow>
            <Title textColor={headerFColor}>The Bark Club</Title>
            <SiteDescription textBG={headerH2BGC} textColor2={headerFColor2}>
              The Bark Club is Acton’s finest dog grooming salon, located
              directly opposite Acton Central Station.
            </SiteDescription>
            <ActionButton>
              <button>Call Now!</button>
            </ActionButton>
          </HeaderTextGroup>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-size: cover;
  background-position: bottom;
  background-color: ${(props) => props.textBGPrim};
  position: relative;
  clip-path2: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${(props) => props.theme.screen.md}) {
  }
`
const HeaderTextGroup = styled.div`
  position: absolute;
  top: 30%;
  left: 10%;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${(props) => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }
  h1:first-of-type {
    opacity: 0.3;
    margin-left: 20px;
    margin-bottom: -20px;
    @media (max-width: ${(props) => props.theme.screen.sm}) {
      font-size: 32px;
    }
  }
  h1 {
    font-size: 62px;
    margin: 0 0 24px;

    @media (max-width: ${(props) => props.theme.screen.sm}) {
      font-size: 42px;
    }
  }

  h2 {
    width: 510px;
    padding: 10px;
    margin-bottom: 24px;
    ${(props) => props.theme.font_size.regular}
    @media (max-width: ${(props) => props.theme.screen.xs}) {
      font-size: 12px;
      width: 100%;
    }
  }

  p {
    margin-bottom: 48px;
  }
`

const TitleShadow = styled.h1`
  color: ${(props) => props.textColor};
`
const Title = styled.h1`
  color: ${(props) => props.textColor};
`
const SiteDescription = styled.h2`
  color: ${(props) => props.textColor2};
  background: ${(props) => props.textBG};
`
const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  justify-self: end;
  align-self: center;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: auto;
  @media (max-width: ${(props) => props.theme.screen.md}) {
    width: 100%;
  }
  @media (max-width: ${(props) => props.theme.screen.sm}) {
    width: 100%;
    height: 240px;
  }
`
