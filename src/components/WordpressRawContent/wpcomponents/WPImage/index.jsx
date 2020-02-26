import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Image from '@/components/Image'
import get from 'lodash/get'
import { StWPFigure } from './style.css'
import WPComponent from '../index'

const WPImage = ({ block }) => {
  const parsedhtml = ReactHtmlParser(block.innerHTML)
  const classNames = get(block, 'attrs.className', '')

  const LinkOrNot = ({ element }) => {
    console.log('>>>element:', element, block)

    const figcaptionfilterer = str => {
      console.log('asdsssf', str)
      const myRegex = /<figcaption[^>]*>(.+?)<\/figcaption>/g;
      const res = myRegex.exec(str)
      if (res && res.length > 0) {
        console.log('asdf', res)
        return res[1]
      }
      return null
    }

    const figcaption = block.innerHTML ? figcaptionfilterer(block.innerHTML) : null;

    if (element.type === 'a') {
      return (
        <a href={element.props.href} target={element.props.target ? element.props.target : '_self'} rel={element.props.rel ? element.props.rel : ''}>
          <LinkOrNot element={element.props.children[0]} />
        </a>
      )
    } else if (element.type === 'img') {
      return (
        <>
          <Image originalurl={element.props.src} />
          {
            figcaption && figcaption.length > 0 && (
              <div className="figwrap">{figcaption}</div>
            )
          }
        </>
      )
    } else {
      console.log('>>>Exception: Its not link nor image:', element)
      return null
    }
  }

  if (parsedhtml[0].type === 'figure') {
    const figure = parsedhtml[0]
    return (
      <StWPFigure className={classNames}>
        <LinkOrNot element={figure.props.children[0]}></LinkOrNot>
      </StWPFigure>
    )
  }
}

export default WPImage