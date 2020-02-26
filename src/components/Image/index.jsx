import React, {useState, useEffect} from 'react'
import Img from 'gatsby-image'
import BgImage from './BgImage'
import FindImage from './findimage'

const Image = ({originalurl, filename, bg, alt, format, localfilename}) => {
	const [image, setImage] = useState(FindImage(originalurl, filename, format, localfilename))

	if (!image) {
		return null
	}

	if (bg) {
		return <BgImage alt={alt || ''} sizes={image.node.imageFile.childImageSharp.image} />
	}

	return <Img alt={alt || ''} sizes={image.node.imageFile.childImageSharp.image} objectFit="contain" objectPosition="50% 50%" />

}

export default Image;
