import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import PostsBlocks from '@/components/EarthquakePostsBlocks'
import HeroTerremoto from '@/components/HeroTerremoto'
import Credits from '@/components/Credits'
import Sismografo from '@/components/Sismografo'

class IndexPage extends React.Component {
  render() {

    return (
      <Layout>
        <Seo />
        <HeroTerremoto />
        <Sismografo />
        <PostsBlocks />
        <Credits />
      </Layout>
    )
  }
}

export default IndexPage
