import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import GravityFormForm from "gatsby-plugin-gravity-forms"

import "./form.css"

const Form = () => {
  // Set your form ID in the query below:
  // Include the wpGfSettings object if you are using reCaptcha.
  const data = useStaticQuery(graphql`
    query formQuery {
      wp {
        ...GravityFormSettings
      }
      wpGfForm(databaseId: { eq: 1 }) {
        ...GravityFormFields
      }
    }
  `)

  return <GravityFormForm data={data} />
}

export default Form
