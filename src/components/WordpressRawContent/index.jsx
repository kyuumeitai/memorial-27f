import React from 'react'
import { parse } from '@wordpress/block-serialization-default-parser'
import WPComponent from './wpcomponents'
import { StWordpressRaw } from './style.css'

const WordpressRawContent = ( {raw, slug, title, single, author, bgColor } ) => {
  const parsedContent = parse(raw)
  const hasMore = parsedContent.findIndex(block => block.blockName === 'core/more')
  const newParsedContent = !single && hasMore !== -1 ? parsedContent.slice(0, hasMore + 1) : parsedContent

  return (
    <StWordpressRaw>
      {
        newParsedContent.map((block, index) => {
          return (
            <WPComponent key={index} block={block} slug={slug} title={title} single={single} author={author} bgColor={bgColor} />
          )
        })
      }
    </StWordpressRaw>
  )
}

export default WordpressRawContent