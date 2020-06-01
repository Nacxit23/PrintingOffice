import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PorductStyle from "./products.module.css"

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
      <div className={`card mb-3`}>
        <Img
          className={`card-img-top`}
          fluid={data.print.childImageSharp.fluid}
        />
        <div className="card-body">
          <h5 className={`card-title ${PorductStyle.titteFont}`}>
            Impresiones
          </h5>
          <p className={`card-text ${PorductStyle.sentenceFont}`}>
            Usted puede hacer su impresión personalizada segun lo que amerite.{" "}
          </p>
        </div>
      </div>
    </div>
  )
}
