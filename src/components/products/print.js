import React from "react"
import cardInfo from "../cardInfo/cardInfo.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query print {
      print: file(relativePath: { eq: "print.jpg" }) {
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
          fluid={data.print.childImageSharp.fluid}
        />
        <div className="card-body">
          <h5 className="card-title">Posteres personalizados</h5>
          <p className="card-text">
            Usted puede pedir hacer sus pósteres personalizados en su empresa
            del tamaño que desee con precios accesibles.
          </p>
        </div>
      </div>
    </div>
  )
}
