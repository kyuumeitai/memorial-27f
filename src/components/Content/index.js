import React from 'react'
import { Link } from 'gatsby'
import Image from '../Image'
import { Container, StContent, StFigureImage, StSubpost, StBackButton} from './style.css'
import WordpressRawContent from '../WordpressRawContent'
import VideoPlayer from '../VideoPlayer'
import Share from '../Sharer'
import GetByWPID from '@/queries/GetByWPID'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Related from '@/components/Related'
import StoryCard from '@/components/StoryCard'

const striphtml = (str) => (str.replace('&#8220;', '').replace('&#8221;', ''))

const Content = ({ title, image, excerpt, raw, slug, acf, attached_mainimg, single, asociacion_expandida, post}) => {

const autor = acf.autor ? acf.autor : null
const video = acf.video ? acf.video : null
const video_iframe = acf.video_iframe ? acf.video_iframe : null
const asociaciones = acf.asociaciones ? acf.asociaciones : null
const mostrarFoto = acf.mostrar_foto ? acf.mostrar_foto : null
const asocExpandida = acf.asociacion_expandida ? acf.asociacion_expandida : false

return (
  <Container>
    <StContent>

      <h1 className="title">{title}</h1>
      <div className="excerpt" dangerouslySetInnerHTML={{ __html: excerpt }} />

      {
        autor && (
          <div className="author">Por: <strong>{autor}</strong></div>
        )
      }
      <div className="share-wrap">
        <Share
          socialConfig={{
            twitterHandle: 'latercera',
            config: {
              url: `https://interactivo.latercera.com/memorial-27f/${slug}/`,
              title: `${title} - Interactivos La Tercera - Presentado por Nike`,
            }
          }}
        />
      </div>
      <WordpressRawContent raw={raw} slug={slug} title={title} />
      {
        single && (
          <div className="share-wrap">
            <Share
              socialConfig={{
                twitterHandle: 'latercera',
                config: {
                  url: `https://interactivo.latercera.com/memorial-27f/${slug}/`,
                  title: `${title}`,
                  // hashtags: ['18D']
                }
              }}
            />
          </div>
        )
      }
      {
          single && (
          <StBackButton>
            <Link className="backbutton" to="/">
              Volver
            </Link>
          </StBackButton>
          )
        }
      {/* <Related actualSlug={slug} /> */}
    </StContent>
  </Container>
  )
}

export default Content