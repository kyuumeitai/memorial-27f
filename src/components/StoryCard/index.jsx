import React from 'react'
import get from 'lodash/get'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Article, Title, StLink, Credits, ButtonWrap, Button} from './style.css'

const StoryCard = ({post}) => {
  const {title, slug} = post
  const author = get(post, 'acf.autor')
  const textextension = title.length >= 100
    ? 3
    : title.length >= 50
      ? 2
      : 1

  const largestLength = (phrase) => {
    const result = phrase.split(' ').reduce((maxLengthWord, currentWord) => {
      if (currentWord.length > maxLengthWord.length) {
        return currentWord
      } else {
        return maxLengthWord
      }
    }, '')
    return result.length
  }

  const hasLargeWord = largestLength(title) >= 12 ? true : false

  return (
    <Article>
      <Title>
        <h2 className={`${hasLargeWord ? 'large-word' : ''}`}>{title}</h2>
        {
          author && (
            <Credits>
              <p className="author">por: <strong>{author}</strong></p>
            </Credits>
          )
        }
        {/* <ButtonWrap>
          <Button>Leer más <FontAwesomeIcon className="icon" icon={['fas', 'arrow-right']} /></Button>
        </ButtonWrap> */}
      </Title>
    </Article>
  )
}

export default StoryCard