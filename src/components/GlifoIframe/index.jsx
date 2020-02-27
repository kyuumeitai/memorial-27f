import React from 'react'
import ReactIframeResizer from 'react-iframe-resizer-super'

const iframeResizerOptions = {
  minHeight: 200,
  autoResize: true,
  sizeHeight: true
}

const GlifoIframe = () => {
  return (
    <ReactIframeResizer src="https://interactivo.latercera.com/memorial-27f/iframe/index.html" iframeResizerOptions={iframeResizerOptions} iframeResizerEnable={true}></ReactIframeResizer>
  )
}

export default GlifoIframe