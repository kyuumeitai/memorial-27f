import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import GetVideo from '../../Getvideo'

const WPMediaVideo = ({block}) => {
  const parsedhtml = ReactHtmlParser(block.innerHTML)

  if (parsedhtml[0].type === 'div') {
    const div = parsedhtml[0]
    if (div.props.children) {
      if (div.props.children[0]) {
        const srcurl = div.props.children[0].props.children[0].props.src
        const filename = srcurl.substring(srcurl.lastIndexOf('/') + 1)

        return (
          <>
            <div className="col col1">
              <GetVideo filename={filename} noProportions controls={false} />
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
    }
  }
}

export default WPMediaVideo