import styled from 'styled-components'
import Image from 'gatsby-image'

const BgImage = styled(Image)`
  position: absolute !important;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  z-index: -1;
  height: ${props => props.height || 'auto'};
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
        font-family: 'object-fit: ${props => props.fit || 'cover'} !important; object-position: ${props => props.position || '50% 50%'} !important;'

  }
`

export default BgImage