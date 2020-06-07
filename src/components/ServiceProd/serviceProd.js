import React from "react"
import SPStyle from "./serviceProd.module.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const {
    clipboard: { childImageSharp: clipboardImg },
    priting: { childImageSharp: priting },
    picture: { childImageSharp: picture },
    megaphone: { childImageSharp: megaphone },
    sello: { childImageSharp: sello },
    id: { childImageSharp: id },
  } = useStaticQuery(getData)
  return (
    <div className="row justify-content-center mt-5 mb-5">
      <div className={`col-lg-3 text-center ${SPStyle.card}`}>
        <Img className="mt-4" fixed={clipboardImg.fixed} />
        <p className={SPStyle.tittleCard}>Facturacion</p>
        <p className={SPStyle.letterCard}>
          Realizamos todos tipos de facture para todo tipo de empresa
        </p>
      </div>
      <div className={`col-lg-3 text-center ${SPStyle.card}`}>
        <Img className="mt-4" fixed={priting.fixed} />
        <p className={SPStyle.tittleCard}>Facturacion</p>
        <p className={SPStyle.letterCard}>Emprimimos todos tipos de formatos</p>
      </div>
      <div className={`col-lg-3 text-center ${SPStyle.card}`}>
        <Img className="mt-4" fixed={picture.fixed} />
        <p className={SPStyle.tittleCard}>Posteres</p>
        <p className={SPStyle.letterCard}>
          Realizamos posteres personalizados para su empresa del tamaño
        </p>
      </div>
      <div className={`col-lg-3 text-center ${SPStyle.card}`}>
        <Img className="mt-4" fixed={megaphone.fixed} />
        <p className={SPStyle.tittleCard}>Anuncios</p>
        <p className={SPStyle.letterCard}>
          Realizamos todos tipos de carteles publicitarios
        </p>
      </div>
      <div className={`col-lg-3 text-center ${SPStyle.card}`}>
        <Img className="mt-4" fixed={sello.fixed} />
        <p className={SPStyle.tittleCard}>Sellos</p>
        <p className={SPStyle.letterCard}>
          Se realizan todos tipos de sellos de hule para tu empresa
        </p>
      </div>
      <div className={`col-lg-3 text-center ${SPStyle.card}`}>
        <Img className="mt-4" fixed={id.fixed} />
        <p className={SPStyle.tittleCard}>Targeta de presentacion</p>
        <p className={SPStyle.letterCard}>
          Se realizan todos tipos de tarjeta de presentacion
        </p>
      </div>
    </div>
  )
}
export const getData = graphql`
  {
    clipboard: file(relativePath: { eq: "clipboard.png" }) {
      childImageSharp {
        fixed(height: 132, width: 132) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    priting: file(relativePath: { eq: "impresion.png" }) {
      childImageSharp {
        fixed(height: 132, width: 132) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    picture: file(relativePath: { eq: "picture.png" }) {
      childImageSharp {
        fixed(height: 132, width: 132) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    megaphone: file(relativePath: { eq: "megaphone.png" }) {
      childImageSharp {
        fixed(height: 132, width: 132) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    sello: file(relativePath: { eq: "sello.png" }) {
      childImageSharp {
        fixed(height: 132, width: 132) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    id: file(relativePath: { eq: "carne-de-identidad.png" }) {
      childImageSharp {
        fixed(height: 132, width: 132) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
