import React from 'react'
import get from 'lodash/get'
import VideoPlayerMP4 from '@/components/VideoPlayerMP4'
import Share from '@/components/Sharer'
import { ACFVideo, ShareWrapper } from './style.css'

const ACFmp4video = ({ block, slug='', title='' }) => {
  const video = get(block, 'attrs.data')
  const striphtml = (str) => (str.replace('&#8220;', '').replace('&#8221;', ''))

  // En este componente:
  // creditos_link: "https://twitter.com/JPVilunir/status/1186462098160791552"
  // creditos_texto: "@JPVilunir en twitter"

  // En el player:
  // video_format: "vertical"
  // video_mp4_url: "https://rudo.video/redirector/1280/867f70fe5f56457a6303638390413447.mp4"
  // explicit: "0"

  // En el player, consulta primero TODO
  // imagen_previsualizacion: 3946
  // subtitulo: 3971

  // const previmage = '' //TODO query desde archivo en wordpress
  // const subtitulo = '' //TODO query desde archivo en wordpress
  // const video_titulo
  // const video_description

  if (!video) return null

  return (
    <ACFVideo>
      <VideoPlayerMP4 videourl={video.video_mp4_url} format={video.video_format} explicit={video.explicit} muted={false} volume={1} title={video.video_titulo} description={video.video_descripcion} creditsLink={video.creditos_link} creditsText={video.creditos_texto} slug={slug} title={title} />
      {
        video.creditos_link && video.creditos_texto && (
          <a className="figcaption" href={video.creditos_link} target="_blank">{video.creditos_texto}</a>
        )
      }
      {/* <h2>{title}</h2>
      <h2>{slug}</h2> */}
      <ShareWrapper>
        <span>Comparte este video</span>
        <Share
          socialConfig={{
            twitterHandle: 'latercera',
            config: {
              url: `https://interactivo.latercera.com/27f/${slug}/`,
              title: `${striphtml(title)}`,
              // hashtags: ['18D']
            }
          }}
        />
      </ShareWrapper>
    </ACFVideo>
  )
}

export default ACFmp4video