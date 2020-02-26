import React from 'react'
import { LaterceraWhite } from "@labcon/copesa-logos"
import { Container, StLogo, StFooterContent } from "./style.css"
import PFooter from '../PFooter'
import Credits from '@/components/Credits'

const Footer = () => (
  <Container>
    <PFooter></PFooter>
    <StFooterContent>
      <a href="https://www.latercera.com/" className="slotLab" target="_blank" rel="noopener noreferrer">
        <StLogo>
          <LaterceraWhite />
        </StLogo>
      </a>
    </StFooterContent>
  </Container>
)

export default Footer