import React from 'react'
import {
  StHeroTerremoto,
  Content,
  Text,
  Bg
} from './style.css'
import LocalImage from '@/components/Image/LocalImage'
import logo27f from '@/images/logo-27f.svg'

const HeroNike = () => (
  <StHeroTerremoto minheight="100vh">
    <Content>
      <h2>
        <img src={logo27f} alt="27 F" />
      </h2>
      <Text>
        <p>Las fallas en el sistema de emergencias que ocurrieron el 27 de febrero de 2010 desencadenaron, no solo un escrutinio público y judicial, sino que millones en pérdidas, pueblos completos destruidos y cientos de chilenos fallecidos, algunos de los cuales continúan desaparecidos.</p> <p>Este especial de La Tercera repasa historias tras el terremoto y tsunami que marcó la pasada década en Chile.</p>
      </Text>
    </Content>
  </StHeroTerremoto>
)

export default HeroNike