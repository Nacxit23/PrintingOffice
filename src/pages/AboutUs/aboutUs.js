import React from "react"
import { Layout } from "../../components/browserComponent"
import SEO from "../../components/seo"
import aboutUsCss from "./aboutUs.module.css"
import { graphql } from "gatsby"
import Img from "gatsby-image"

const aboutUs = props => {
  return (
    <Layout>
      <SEO title="Sobre Nosotros"/>
      <div className={`row  ${aboutUsCss.div}`}>
        <div className={`col-12 ${aboutUsCss.about_us}`}>
          <p className={`${aboutUsCss.tittle}`}>Quienes Somos?</p>
          <p className={`${aboutUsCss.letter} lead`}>
            Somos una empresa distribuidora con más 30 años de experiencia, en
            la creación y venta autorizada de factura empresariales como también
            impresoras de las marcas mas reconocidas a nivel mundial, nuestra
            empresa brinda servicio de manera nacional.
          </p>
          <p className={`${aboutUsCss.title_two} `}>Empresa la cual hemos trabajado!</p>
          <div className={`row justify-content-center col-lg-10`}>
            <Img className={`img-ts rounded float-xs-left ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-right ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-left ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-right ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-left ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-right ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-left ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-right ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-left ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
            <Img className={`img-ts rounded float-xs-right ${aboutUsCss.business}`}
                 fluid={props.data.build.childImageSharp.fluid}/>
          </div>
        </div>
        <div className={`col ${aboutUsCss.vision} row justify-content-center`}>
          <p className={`${aboutUsCss.vision_tittle}`}>Vision</p>
          <p className={`${aboutUsCss.letter_vision} lead`}>
            En Grupo Promerica creemos que
            todas las personas y empresas de
            nuestras comunidades deberían
            superar sus límites para alcanzar el
            éxito que se merecen.
          </p>
          <Img className={`img-ts rounded float-xs-right ${aboutUsCss.vision_img}`}
               fluid={props.data.women.childImageSharp.fluid}/>
        </div>
        <div className={`col ${aboutUsCss.valor} row justify-content-center`}>
          <p className={`${aboutUsCss.valor_tittle}`}>Nuestro valores</p>
          <p className={`${aboutUsCss.letter_valor} lead`}>
            Empatía Permanente
            Ponernos en el lugar del otro, comprender sus metas es nuestra esencia para
            encontrar soluciones conjuntamente. Impulsamos una banca de relaciones que
            desarrolla negocios rentables a largo plazo.
          </p>
          <Img className={`img-ts rounded float-xs-right ${aboutUsCss.valor_img}`}
               fluid={props.data.valores.childImageSharp.fluid}/>
        </div>
      </div>
    </Layout>
  )
}

export const imgEmpre = graphql`
  query {
    build: file(relativePath: { eq: "Build.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
     women: file(relativePath: {eq: "vision.png"}) {
       childImageSharp {
         fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
     valores: file(relativePath: {eq: "valores.png"}) {
       childImageSharp {
         fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default aboutUs
