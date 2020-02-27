import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import get from 'lodash/get'
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Profile from "@/components/Profile"

const VictimPage = ({data}) => {
  const { googleSheetTestimoniosRow } = data
  return (
    <Layout>
      <Seo/>
      <Profile person={googleSheetTestimoniosRow} />
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

