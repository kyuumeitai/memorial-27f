import React from 'react'
import {
  StHeroMemorial,
  Content,
  Text,
  Bg
} from './style.css'
import LocalImage from '@/components/Image/LocalImage'
import logo27f from '@/images/logo-27f.svg'

const HeroMemorial = () => (
  <StHeroMemorial minheight="100vh">
    <Content>
      <div className="title">
        <h1>
          529 fallecidos<br/>
          25 desaparecidos<br />
        </h1>
        <h1>
          MEMORIAL
        </h1>
        <h2>
          <img src={logo27f} />
        </h2>
      </div>
      <Text>
        <p>Aún a 10 años, no existe una lista oficial. La lista entregada por el gobierno actual habla de 100 muertes. La lista antigua (de similar administración) hablaba de 500. </p>
        <h2>Este es un esfuerzo por recopilar, visibilizar y conmemorar a las 554 víctimas que logramos identificar.</h2>
        <p>Cada línea representa una víctima. Gira la rueda para navegar. Puedes filtrar por edad, región y ciudad presionando los botones superiores.</p>
        <p>Puedes ver la planilla aquí.</p>
        <p>El listado completo de nombres está aquí.</p>
        <h1>
          GLIFO ACÁ
        </h1>
        <h1>
          pelotitas acá
        </h1>
      </Text>
    </Content>
  </StHeroMemorial>
)

export default HeroMemorial