import React from "react"
import cardInfo from "../cardInfo/cardInfo.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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
          className={`card-img-top ${cardInfo.imgSize}`}
          fluid={data.invoice.childImageSharp.fluid}
        />
        <div className="card-body">
          <h5 className="card-title">Imprime tu factura</h5>
          <p className="card-text">
            Usted puede hacer su factura para su empresa con numero RUP
            autorizados por la DGI
          </p>
        </div>
      </div>
    </div>
  )
}
