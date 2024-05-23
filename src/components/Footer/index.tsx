import React from 'react'
import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook-round-svgrepo-com 1.png'
import instagram from '../../assets/instagram-round-svgrepo-com (1) 1.png'
import twitter from '../../assets/twitter-2-svgrepo-com 1.png'
import { FooterStyle, Branding, SocialMedia, Disclaimer } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
    <FooterStyle>
        <Branding src={logo} alt="Logo do efood" />
        <SocialMedia>
            <img src={facebook} alt="Facebook" />
            <img src={instagram} alt="Instagram" />
            <img src={twitter} alt="Twitter" />
        </SocialMedia>
        <Disclaimer>
            A efood é uma plataforma para divulgação de estabelecimentos, a
            responsabilidade pela entrega, qualidade dos produtos é toda do
            estabelecimento contratado. <br /> Todos direitos reservados efood
            &copy; {currentYear}
        </Disclaimer>
    </FooterStyle>
)

export default Footer
