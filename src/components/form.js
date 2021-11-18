import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GravityFormForm from "gatsby-plugin-gravity-forms"

import "./form.css"

const Form = () => {
  const data = useStaticQuery(graphql`
    query formQuery {
      wpGravityFormsForm(formId: { eq: 4 }) {
        ...GravityFormFields
      }
    }
  `)

  return <GravityFormForm data={data} />
}

export default Form
