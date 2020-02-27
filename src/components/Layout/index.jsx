import React, { useState } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import ThemeContext from '@/context/ThemeContext'

import Header from "../Header"
import Footer from "../Footer"

import '@fortawesome/fontawesome-svg-core/styles.css'

import GlobalStyle from '../../styles/global.css'
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

import { library, config } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faChevronDown, faChevronUp, faChevronRight, faChevronLeft, faTimes, faBars, faPlay, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faPlayCircle, faEye } from '@fortawesome/free-regular-svg-icons'
import ProgressBar from '../ProgressBar'
import { StLayout, MainWrap } from './style.css'

config.autoAddCss = false

library.add(faFacebookF, faTwitter, faWhatsapp, faChevronDown, faChevronUp, faChevronRight, faChevronLeft, faTimes, faBars, faPlayCircle, faEye, faPlay, faArrowRight)

const Layout = ({ sponsorLogo, children }) => {
  const [value, setValue] = useState(false);
  return (
    <ThemeContext.Consumer>
      {
        theme => (
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => (
            <StLayout className={theme.phase}>
              <GlobalStyle />
              <ProgressBar height={2} color='white' />
              <Header title={data.site.siteMetadata.title} sponsorLogo={sponsorLogo} isOn={value} handleToggle={() => {
                try {
                  trackCustomEvent({
                    category: 'interaction',
                    action: 'scroll',
                  })
                } catch (err) {
                  console.log(err)
                }
                setValue(!value)
                }} />
              <MainWrap className={value ? 'earthquake' : 'calm'}>
                <main>{children}</main>
              </MainWrap>
              <Footer />
            </StLayout>
          )}
        />
      )
    }
  </ThemeContext.Consumer>
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
