import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: No Encontrado" />
    <h1>No Encontrado</h1>
    <p>No encontramos lo que buscas.</p>
  </Layout>
)

export default NotFoundPage
