import React from 'react'
import WPComponent from '../index'
import { StWPColumns } from './style.css'

const WPColumn = ({block, title, slug}) => {
  const { innerBlocks } = block

  return (
    <div className="coreColumn">
      {
        innerBlocks.map((innerBlock, index) => {
          return (
            <WPComponent key={index} block={innerBlock} title={title} slug={slug} />
          )
        })
      }
    </div>
  )
}

const WPColumns = ({ block, title, slug }) => {
  const {innerBlocks, attrs} = block
  const blockclasses = attrs.className || ''
  return (
    <StWPColumns cols={innerBlocks.length} className={`${blockclasses} wpcolumns`}>
      {
        innerBlocks.map((innerBlock, index) => {
          return (
            <WPColumn key={index} block={innerBlock} title={title} slug={slug} />
          )
        })
      }
    </StWPColumns>
  )
}

export default WPColumns