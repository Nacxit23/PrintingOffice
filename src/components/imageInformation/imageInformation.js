import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ImgInfo from "./imageinformation.module.css"
import { Title } from "../styles/component"

export default () => {
  const data = useStaticQuery(graphql`
    query printFullcolor {
      printColor: file(relativePath: { eq: "impresiones_full_color.png" }) {
        childImageSharp {
          fluid(maxWidth: 330, maxHeight: 278) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cardParty: file(
        relativePath: {
          eq: "invitaciones-magicas-cumpleanos-unicornio_41066-569.jpg"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 626, maxHeight: 626) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="row">
      <div className={`col ${ImgInfo.boxLeft}`}>
        <Img
          className={`img-fluid`}
          fluid={data.cardParty.childImageSharp.fluid}
        />
        <Title marginTop={"35px"} color={"#FBB2A1"}>Carta de invitaciones</Title>
      </div>
      <div className={`col ${ImgInfo.boxRight}`}>
        <Img
          className={`img-fluid`}
          fluid={data.printColor.childImageSharp.fluid}
        />
        <Title color={"#FFFFFF"} marginTop={"150px;"}>
          Impresiones full color
        </Title>
      </div>
    </div>
  )
}
