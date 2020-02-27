import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import HeroMemorial from '@/components/HeroMemorial'
import Credits from '@/components/Credits'
import GlifoIframe from '@/components/GlifoIframe'

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <Seo />
        <HeroMemorial />
        <GlifoIframe />
        <Credits />
      </Layout>
    )
  }
}

export default IndexPage
