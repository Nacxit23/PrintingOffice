import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import cardInfo from "./cardInfo.module.css"

export default () => {
  const data = useStaticQuery(graphql`
    query service {
      poster: file(relativePath: { eq: "posterGalery.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 443) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      print: file(relativePath: { eq: "print.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 443) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      invoice: file(relativePath: { eq: "post-facturaelectronica04.jpg" }) {
        childImageSharp {
          fluid(maxHeight: 443) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(data)
  return (
    <div className="conteiner">
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills">
            <li className="nav-item">
              <a
                className={`nav-link ${(cardInfo.active,
                cardInfo.colorLinkCard)}`}
                href="#"
              >
                Posteres
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${(cardInfo.active,
                cardInfo.colorLinkCard)}`}
              >
                Facturas
              </a>
            </li>
          </ul>
        </div>
        <div className="card mb-3">
          <Img
            className={`card-img-top ${cardInfo.imgSize}`}
            fluid={data.poster.childImageSharp.fluid}
          />
          {/* <img className="card-img-top" src=".../100px180/" alt="Card image cap"> */}
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
