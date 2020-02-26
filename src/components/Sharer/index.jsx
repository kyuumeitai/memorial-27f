import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton
} from 'react-share'

import {StSharer} from './style.css'

const Share = ({ socialConfig, tags }) => (
  <StSharer className="post-social">
    <FacebookShareButton url={socialConfig.config.url} quote={socialConfig.config.title} className="button is-rounded">
      <span className="icon">
        <FontAwesomeIcon icon={['fab', 'facebook-f']} />
      </span>
    </FacebookShareButton>
    <TwitterShareButton url={socialConfig.config.url} title={socialConfig.config.title} via={socialConfig.twitterHandle} hashtags={socialConfig.config.hashtags} className="button is-rounded">
      <span className="icon">
        <FontAwesomeIcon icon={['fab', 'twitter']} />
      </span>
    </TwitterShareButton>
    <WhatsappShareButton url={socialConfig.config.url} title={socialConfig.config.title} className="button is-rounded">
      <span className="icon">
        <FontAwesomeIcon icon={['fab', 'whatsapp']} />
      </span>
    </WhatsappShareButton>
  </StSharer>
)

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string)
}
Share.defaultProps = {
  tags: []
}

export default Share