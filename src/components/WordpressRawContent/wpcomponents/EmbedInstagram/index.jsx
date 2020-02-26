import React, { useState, useEffect } from 'react'
import { StEmbedInstagram } from './style.css'
import get from 'lodash/get'
import useScript from '@/hooks/useScript'

const INSTAGRAM_EMBED_SCRIPT = "https://www.instagram.com/embed.js";

const EmbedInstagram = ({ block }) => {
  const [loaded, error] = useScript(INSTAGRAM_EMBED_SCRIPT)
  const [data, setData] = useState({})
  const oembedurl = get(block, 'attrs.url')

  const fetchoembed = async (url) => {
    fetch(`https://api.instagram.com/oembed/?url=${url}&omitscript=true`).then(response => {
      return response.json()
    }).then(data => {
      setData(data)
      if (typeof window !== 'undefined') {

        if (typeof instgrm !== 'undefined') {
          try {
            window.instgrm.Embeds.process();
          } catch (e) { console.log('error', e) }
          return;
        }
      }
    })
  }

  useEffect(() => {
    fetchoembed(oembedurl)
  }, [loaded])

  return (
    <>
      {
        loaded && !error && (
          <StEmbedInstagram>
            {
              data && (
                <div dangerouslySetInnerHTML={{ __html: data.html }}></div>
              )
            }
          </StEmbedInstagram>
        )
      }
    </>
  )
}

export default EmbedInstagram