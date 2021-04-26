import React from "react"
import styled from "styled-components"

import {
  EmailButton,
  InstagramlButton,
  FacebookButton,
} from "../common/layout/sharedComponents"

const TestemonialsSection = () => {
  return (
    <WrapperGrid>
      <WrapperItem>
        <SocialMedia>
          <h2>Share</h2>
          <Ebutton>
            <EmailButton />
          </Ebutton>
          <Ibutton>
            <InstagramlButton />
          </Ibutton>
          <Fbutton>
            <FacebookButton />
          </Fbutton>
        </SocialMedia>
      </WrapperItem>
      <WrapperItem>
        <TitleFaded>Testemonials</TitleFaded>
        <Title>Testemonials</Title>

        <TestemonialBox>
          <TestemonialBoxInner>
            <p>
              My daughter, Rose, loves The Bark Club where we take our dogs –
              and we talk to dogs for hours while they are being groomed.”
              <span>~Emilia</span>
            </p>
          </TestemonialBoxInner>
        </TestemonialBox>

        <TestemonialBox>
          <TestemonialBoxInner>
            <p>
              The bark club did a brilliant job on my wheaten terrier puppy –
              not the easiest commission! Very Highly recommended.”
              <span>~Richard</span>
            </p>
          </TestemonialBoxInner>
        </TestemonialBox>

        <TestemonialBox>
          <TestemonialBoxInner>
            <p>
              Thank you for doing such a wonderful job with Cuba, even though he
              can be such a handful (to say the least) when being groomed! I was
              also very impressed with the friendly service and reasonable
              price. Looking forward to our next visit.”
              <span>~Glida</span>
            </p>
          </TestemonialBoxInner>
        </TestemonialBox>

        <TestemonialBox>
          <TestemonialBoxInner>
            <p>
              A huge thank you to Ariska at Bark Club for transforming my
              adorable scruffy, dirty dog Dougie into a happy, clean and 10
              years younger boy! I was so worried about leaving him for the
              first time as he is a rescue dog and very nervous but the love and
              care you gave him (as well as a 5* grooming) was amazing! He was
              so happy to be with you; you have a real gift with dogs. Thank you
              so much!”
              <span>~Maria</span>
            </p>
          </TestemonialBoxInner>
        </TestemonialBox>
      </WrapperItem>
    </WrapperGrid>
  )
}

export default TestemonialsSection

const WrapperGrid = styled.div`
  display: grid;
  grid-template-columns: 20% 65%;
  margin: 0 auto;
`
const WrapperItem = styled.div`
  display: flex;
  flex-flow: column;
  text-align: center;
  justify-content: flex-start;
  &:first-of-type {
    justify-content: center;
  }
`
const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1em;
  color: #edb506;

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    font-size: 2em;
    letter-spacing: 0em;
  }
`
const TitleFaded = styled(Title)`
  margin-left: 50px;
  margin-bottom: -30px;
  opacity: 0.2;
`
const TestemonialBoxInner = styled.div``
const TestemonialBox = styled.div`
  background: #fdf4d9;
  max-width: 600px;
  border-left: 20px solid #edb506;
  margin-bottom: 20px;
  padding: 20px;
  margin: 20px auto;
  p {
    text-align: left;
    line-height: 1.7em;
  }
  span {
    display: block;
    margin-top: 20px;
  }
`
const SVGSize = 48
const SocialMedia = styled.div`
  h2 {
    text-orientation: mixed;
    -webkit-writing-mode: vertical-rl;
    -ms-writing-mode: tb-rl;
    writing-mode: vertical-rl;
    margin: 0 auto 20px;
    text-transform: uppercase;
    color: #edb506;
  }
  svg {
    width: ${SVGSize}px;
    height: ${SVGSize}px;
    fill: #edb506;
  }
`
const Fbutton = styled.div``
const Ebutton = styled.div``
const Ibutton = styled.div``
