import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import Image from '../../../Image'

const WPMediaText = ({block}) => {
  try {
    const parsedhtml = ReactHtmlParser(block.innerHTML)

    if (parsedhtml[0].props.children[0].props.children[0].props.src) {

      const srcurl = parsedhtml[0].props.children[0].props.children[0].props.src
      const filename = srcurl.substring(srcurl.lastIndexOf('/') + 1)

      return (
        <>
          <div className="col col1">
            <Image filename={filename} />
          </div>
          <div className="col col2">
            {
              block.innerBlocks.map((childblock, ind) => {
                const replacedhtml = childblock.innerHTML.replace('data-tooltip', 'data-tip')
                return (
                  <div key={ind} className="coreParagraph" dangerouslySetInnerHTML={{ __html: replacedhtml }} />
                )
              })
            }
          </div>
        </>
      )
    }
  } catch (err) { console.log(err) }
}

export default WPMediaText