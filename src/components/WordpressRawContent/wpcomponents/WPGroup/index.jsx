import React from 'react'
import WPComponent from '../index'
import get from 'lodash/get'
import { StWPGroup } from './style.css'
import CustomComparator from '../CustomComparator/'

const WPGroup = ({ block, title, slug }) => {
  const { innerBlocks, attrs } = block
  const backgroundColor = get(block, 'attrs.backgroundColor')
  const backgroundColorClass = backgroundColor ? `has-${backgroundColor}-background-color` : ''
  const blockclasses = get(block, 'attrs.className')

  if(blockclasses === 'before-after') {
    return (
      <CustomComparator block={innerBlocks} />
    )
  }
  return (
    <StWPGroup className={`${blockclasses} ${backgroundColorClass}`} >
      {
        innerBlocks.map((innerBlock, index) => {
          return (
            <WPComponent key={index} block={innerBlock} title={title} slug={slug} />
          )
        })
      }
    </StWPGroup>
  )
}

export default WPGroup