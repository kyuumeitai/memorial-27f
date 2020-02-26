import React from 'react'
import Hero from '@/components/Hero'
import LocalImage from '@/components/Image/LocalImage'
import {LaTerceraColorWhite, LaboratorioDeContenidosDeMarcaWhite} from '@labcon/copesa-logos'
import {
  StSimpleHero,
  Header,
  Col,
  Content,
  Bg,
  Sponsored,
  Medium
} from './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logoUCSH from '@/images/logo-ucsh.png'

const SimpleHero = () => (
  <StSimpleHero minheight="100vh">
    <Header>
      <Col>
        <Medium>
          <LaTerceraColorWhite />
        </Medium>
      </Col>
      <Col>
        <Sponsored>
          <span>Presentado por: </span>
          <img src={logoUCSH} alt="Universidad Católica Silva Henríquez"/>
        </Sponsored>
      </Col>
      <Col>
        <div>
          <LaboratorioDeContenidosDeMarcaWhite />
        </div>
      </Col>
    </Header>
    <Content>
      <div>
        <h1>Chile y el desafío de la salud mental en tiempos de crisis</h1>
        <p>Una mirada de la Universidad Católica Silva Henríquez.</p>
      </div>
    </Content>
    <Bg>
      <LocalImage filename="home.jpg"></LocalImage>
    </Bg>

  </StSimpleHero>
)

export default SimpleHero