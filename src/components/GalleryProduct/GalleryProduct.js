import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegCaretSquareRight, FaRegCaretSquareLeft } from "react-icons/fa"
import Img from "gatsby-image"
import "./GalleryProduct.css"

export default () => {
  const data = useStaticQuery(graphql`
    query salePrinting {
      impresoraOnew: file(relativePath: { eq: "impresoraOne.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      impresoraTwo: file(relativePath: { eq: "impresoraTwo.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      impresoraThree: file(relativePath: { eq: "impresoraThree.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="conteiner">
      <div className="col">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Img
                fluid={data.impresoraOnew.childImageSharp.fluid}
                className="d-block w-100"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <Img
                fluid={data.impresoraTwo.childImageSharp.fluid}
                className="d-block w-100"
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <Img
                fluid={data.impresoraThree.childImageSharp.fluid}
                className="d-block w-100"
                alt="Second slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <FaRegCaretSquareLeft className="icon-action" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <FaRegCaretSquareRight className="icon-action" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    </div>
  )
}
