import React from 'react'
import { HeroContainer, Branding, Slogan } from './styles'
import logo from '../../assets/logo.png'

const Hero = () => (
    <HeroContainer>
        <Branding src={logo} alt="Logo do efood" />
        <Slogan>Viva experiências gastronômicas no conforto da sua casa</Slogan>
    </HeroContainer>
)
export default Hero
