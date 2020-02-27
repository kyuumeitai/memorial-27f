import React from 'react'
import Layout from '@/components/Layout'
import Seo from '@/components/Seo'
import ListadoVictimas from '@/components/ListadoVictimas'

const Listado = () => {

  return (
    <Layout>
      <Seo />
      <ListadoVictimas />
    </Layout>
  )
}



export default Listado
