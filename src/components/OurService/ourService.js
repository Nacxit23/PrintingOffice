import React from "react"
import ourServiceStyle from "./ourService.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { Letter, LetterTittle } from "../styles/component"
import Img from "gatsby-image"

export default () => {
  const query = useStaticQuery(graphql`
    query logo {
      file(relativePath: { eq: "LogoPrinting.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className={`row ${ourServiceStyle.conteiner}`}>
      <div className="col-lg-5 justify-content-center">
        <div
          className={`row justify-content-center align-items-center ${ourServiceStyle.circle}`}
        >
          <Img
            className={`img-fluid ${ourServiceStyle.img}`}
            fluid={query.file.childImageSharp.fluid}
          />
        </div>
      </div>
      <div className={`col-lg-7`}>
        <LetterTittle size={"128px"} top={"86px"} right={"83px"}>
          Nuestros Servicios
        </LetterTittle>
        <Letter color={"#FFFFFF"} size={"42px"} right={"10px"}>
          Ofrecemos productos completamente nuevos para ayudar que las empresas
          y organizaciones pueden realizar sus compra y venta correctamente.
          También ofrecemos diversos productos relacionados con la papelería
          como también diversos productos publicitarios.
        </Letter>
      </div>
    </div>
  )
}
