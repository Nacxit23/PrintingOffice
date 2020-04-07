import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PorductStyle from "./products.module.css"

export default props => {
  const data = useStaticQuery(graphql`
    query invoice {
      invoice: file(relativePath: { eq: "post-facturaelectronica04.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 443) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div>
      <div className="card mb-3">
        <Img
          className={`card-img-top`}
          fluid={data.invoice.childImageSharp.fluid}
        />
        <div className="card-body">
          <h5 className={`card-title ${PorductStyle.titteFont}`}>
            Imprime tu facturas
          </h5>
          <p className={`card-text ${PorductStyle.sentenceFont}`}>
            Usted puede hacer su factura para su empresa con numero RUP
            autorizados por la DGI
          </p>
        </div>
      </div>
    </div>
  )
}
