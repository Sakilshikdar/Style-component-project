import React from 'react'
import logo from '../../images/right.png'
import { Container } from '../../Styles/Common.styled'
import { HeroSection } from '../../Styles/Hero.styled'

export default function Hero() {
  return (
     <Container>
    <HeroSection>
      <div>
        <h2>My First project with <span bg='#888CEF'>Styled Component</span></h2>
      </div>
      <div>
        <img src={logo} alt=""/>
      </div>
    </HeroSection>
     </Container>
  )
}
