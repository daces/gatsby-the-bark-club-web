import React from "react"
import styled from "styled-components"

import { Container } from "../global"


const Footer = ({bgColor3}) => {

  return( 
  <>   

  <FooterWrapper background={bgColor3} id="footer">
    <FooterColumnContainer>
    <span>Copyright © 2021 The Bark Club. All Rights Reserved.</span>
    </FooterColumnContainer>
  </FooterWrapper>
  </>
)
}


const FooterWrapper = styled.footer`
background-color: ${props => props.background};
margin: 0;
padding: 20px 0;
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }

  span {
    font-size: 12px;
    color: #fff;
  }
`

export default Footer
