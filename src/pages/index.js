import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import HeroMemorial from '@/components/HeroMemorial'
import Credits from '@/components/Credits'

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <Seo />
        <HeroMemorial />

        <Credits />
      </Layout>
    )
  }
}

export default IndexPage
