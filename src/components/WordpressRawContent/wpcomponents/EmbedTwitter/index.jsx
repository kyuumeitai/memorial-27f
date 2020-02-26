import React, {useState, useEffect} from 'react'
import { StEmbedTwitter } from './style.css'
import jsonp from 'jsonp'
import get from 'lodash/get'
import useScript from '@/hooks/useScript'

const TWITTER_EMBED_SCRIPT = "https://platform.twitter.com/widgets.js";

const EmbedTwitter = ({ block }) => {
  const [loaded, error] = useScript(TWITTER_EMBED_SCRIPT)
  const [data, setData] = useState({})
  const oembedurl = get(block, 'attrs.url')

  const fetchoembed = async (url) => {
    await jsonp(`https://publish.twitter.com/oembed?url=${url}`, null, (err, data) => {
      if(err){
        console.log(err)
      } else {
        setData(data)
        if (typeof window !== 'undefined') {
          if (typeof twttr !== 'undefined') {
            try {
              window.twttr.widgets.load(document.getElementsByClassName('embedwrapper'));
            } catch (e) { console.log(error, e) }
            return;
          }
        }
      }
    })
  }

  useEffect( () => {
    fetchoembed(oembedurl)
  }, [])

  return (
      <>
        {
          loaded && !error && (
            <StEmbedTwitter>
              {
                data && (
                  <div className="embedwrapper" dangerouslySetInnerHTML={{ __html: data.html }}></div>
                )
              }
            </StEmbedTwitter>
          )
        }
      </>
  )
}

export default EmbedTwitter