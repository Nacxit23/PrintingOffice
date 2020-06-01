import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ProductStyle from "./products.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query poster {
      poster: file(relativePath: { eq: "posterGalery.jpg" }) {
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
          className="card-img-top"
          fluid={data.poster.childImageSharp.fluid}
        />
        <div className="card-body">
          <h5 className={`card-title ${ProductStyle.titleFont}`}>
            Posteres personalizados
          </h5>
          <p className={`card-text ${ProductStyle.sentenceFont}`}>
            Usted puede pedir hacer sus pósteres personalizados en su empresa
            del tamaño que desee con precios accesibles.
          </p>
        </div>
      </div>
    </div>
  )
}
