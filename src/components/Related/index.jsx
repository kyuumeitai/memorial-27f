import React from 'react'
import { StRelated, Header, Content } from './style.css'
import Posts from '@/components/Posts'

const Related = ({actualSlug}) => {

  return (
    <StRelated>
      <Header>
        <h2>Más Artículos</h2>
      </Header>
      <Content>
        <Posts actualSlug={actualSlug} />
      </Content>
    </StRelated>
  )
}

export default Related
