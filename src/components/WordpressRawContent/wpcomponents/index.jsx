import React from 'react'
import Fade from 'react-reveal/Fade'
import WPImage from './WPImage'
import WPBlockQuote from './WPBlockQuote'
import WPList from './WPList'
import WPVerse from './WPVerse'
import WPVideo from './WPVideo'
import WPMediaText from './WPMediaText'
import WPMediaVideo from './WPMediaVideo'
import WPHeading from './WPHeading'
import WPColumns from './WPColumns'
import WPGroup from './WPGroup'
import WPParagraph from './WPParagraph'
import WPGallery from './WPGallery'
import WPSeparator from './WPSeparator'
import WPPullQuote from './WPPullQuote'
import WPPreformatted from './WPPreformatted'
import WPHtml from './WPHtml'
import WPMore from './WPMore'
import WPTable from './WPTable'
import EmbedTwitter from './EmbedTwitter'
import EmbedFacebook from './EmbedFacebook'
import EmbedInstagram from './EmbedInstagram'
import CustomLogos from './CustomLogos'
import ACFHardcoded from './ACFHardcoded'
import ACFRudoVideo from './ACFRudoVideo'
import ACFmp4video from './ACFmp4video'
import ACFSharer from './ACFSharer'
import ACFExcerpt from './ACFExcerpt'
import ACFLottie from './ACFLottie'
import ACFAuthor from './ACFAuthor'

const WPComponent = ({block, slug, title, single, author, bgColor}) => {
  if(typeof block.blockName === 'object' && block.blockName === null)
    return null

  if (block.blockName === 'core/paragraph') {
    return (
      <WPParagraph block={block} />
    )
  } else

  if (block.blockName === 'core/image') {
    return (
      <WPImage block={block} />
    )
  } else

  if (block.blockName === 'core/quote') {
    return (
      <Fade>
        <WPBlockQuote block={block} />
      </Fade>
    )
  } else

  if (block.blockName === 'core/heading') {
    return (
      <WPHeading block={block} />
    )
  } else

  if (block.blockName === 'core/list') {
    return (
      <Fade>
        <WPList block={block} />
      </Fade>
    )
  } else

  if (block.blockName === 'core/verse') {
    return (
      <Fade>
        <WPVerse block={block} />
      </Fade>
    )
  } else

  if (block.blockName === 'core/video') {
    return (
      <WPVideo block={block} />
    )
  } else

  if (block.blockName === 'core/media-text' && block.attrs.mediaType === 'image') {
    return (
      <WPMediaText block={block} />
    )
  } else

  if(block.blockName === 'core/media-text' &&  block.attrs.mediaType === 'video'){
    return (
      <WPMediaVideo block={block} />
    )
  } else

  if(block.blockName === 'core/columns') {
    return (
      <WPColumns block={block} title={title} slug={slug} />
    )
  } else

  if (block.blockName === 'core/group') {
    return (
      <WPGroup block={block} title={title} slug={slug} />
    )
  } else

  if (block.blockName === 'core/gallery') {
    return (
      <WPGallery block={block} />
    )
  } else

  if (block.blockName === 'core/separator') {
    return (
      <WPSeparator block={block} />
    )
  } else

  if (block.blockName === 'core/pullquote') {
    return (
      <Fade>
        <WPPullQuote block={block} />
      </Fade>
    )
  } else

  if (block.blockName === 'core/preformatted') {
    return (
      <WPPreformatted block={block} />
    )
  } else

  if (block.blockName === 'core/html') {
    return (
      <WPHtml block={block} />
    )
  } else

  if (block.blockName === 'core/more') {
    return (
      <WPMore slug={slug} single={single} bgColor={bgColor} />
    )
  } else

  if (block.blockName === 'core/table') {
    return (
      <WPTable block={block} />
    )
  } else

  if (block.blockName === 'core-embed/twitter') {
    return (
      <EmbedTwitter block={block} />
    )
  } else

  if (block.blockName === 'core-embed/facebook') {
    return (
      <EmbedFacebook block={block} />
    )
  } else

  if (block.blockName === 'core-embed/instagram') {
    return (
      <EmbedInstagram block={block} />
    )
  } else

  if (block.blockName === 'acf/rudovideoblock') {
    return (
      <ACFRudoVideo block={block} />
    )
  } else

  if (block.blockName === 'acf/mp4videoblock') {
    return (
      <ACFmp4video block={block} title={title} slug={slug} />
    )
  } else

  if (block.blockName === 'acf/sharerblock') {
    return (
      <ACFSharer title={title} slug={slug} />
    )
  } else

  if (block.blockName === 'acf/excerptblock') {
    return (
      <ACFExcerpt block={block} />
    )
  } else

  if (block.blockName === 'acf/lottieblock') {
    return (
      <ACFLottie block={block} />
    )
  } else

  if (block.blockName === 'acf/authorblock') {
    return (
      <ACFAuthor author={author} />
    )
  } else

  if (block.blockName === 'advanced-gutenberg-blocks/code') { //custom embed video
    const { attrs } = block
    const { file, language } = attrs
    if(language === 'html'){
      return (
        <CustomLogos logo={file} />
      )
    } else {
      return null
    }
  } else
  if (block.blockName === 'acf/hardcomponent') { //harcoded component
    return (
      <ACFHardcoded block={block} />
    )
  } else
  {
    console.log('block', block)
    return null
  }
}

export default WPComponent