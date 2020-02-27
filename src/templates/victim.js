import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import get from 'lodash/get'
import Layout from "../components/Layout"
import Seo from "../components/Seo"

const VictimPage = ({data}) => {
  // console.log('>>>VictimPage data:', data)
  const { googleSheetTestimoniosRow } = data
  const { nombres, apellidos, edad, comuna, causadefallecimiento, region, testimonio, nombredelfamiliar } = googleSheetTestimoniosRow
  return (
    <Layout>
      <Seo/>
      <h2>{nombres} {apellidos}</h2>
      <h3>{edad}</h3>
      <h3>{comuna}, {region}</h3>
      <h3>{causadefallecimiento}</h3>
      {testimonio && (
        <>
          <p>{testimonio}</p>
          {
            nombredelfamiliar && (
              <p>{nombredelfamiliar}</p>
            )
          }
        </>
      )}
    </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    googleSheetTestimoniosRow(
      id: {
        eq: $id
      }
    ) {
      comuna
      edad
      fechadenacimiento
      causadefallecimiento
      apellidos
      nombres
      region
      testimonio
      nombredelfamiliar
    }
  }
`

export default VictimPage

