import React from 'react'
import {
  StHeroMemorial,
  Content,
  Text,
  Bg
} from './style.css'
import { Link } from 'gatsby'
import LocalImage from '@/components/Image/LocalImage'
import logo27f from '@/images/logo-27f.svg'
import laimagen from '@/images/instrucciones-27f.jpg'

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
        <p>¿Cuántas vidas se perdieron durante el terremoto y tsunami de 2010? ¿Conocemos los nombres de todas esas personas? Hasta el día de hoy no existe una lista oficial, a disposición de las familias afectadas y la opinión pública, para su consulta. </p>

        <p>A una década de esa fatal madrugada de febrero, esta investigación de La Tercera busca visibilizar y homenajear a cada una de las víctimas de aquella catástrofe. Del total de 554 personas que configuran esta lista, contactamos aleatoriamente a distintos familiares para recoger sus testimonios, los que compartimos en este memorial.</p>

        <p>Queremos invitarlos a continuar construyendo con nosotros esta lista que, sabemos, no es definitiva. Pueden consultar <Link to={`/listado-completo/`}>aquí el listado detallado de nombres</Link> y contactarnos a través de <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-xKwrEh5zUI-I1K5X02ftb1h-8Z_STnVCdDQzdR5XXfxm4g/viewform" target="_blank">este formulario</a> para enviarnos sus correcciones y comentarios.</p>

      </Text>

      <img className="imginstr" src={laimagen} alt=""/>

    </Content>
  </StHeroMemorial>
)

export default HeroMemorial