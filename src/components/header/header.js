import React from "react"
import "./header.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

export default () => {
  const data = useStaticQuery(graphql`
    query Logo {
      __typename
      file(relativePath: { eq: "LogoPrinting.png" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light headerColor">
        <ul className="navbar-nav mr-auto">
          <Link className="navbar-brand color-link" to="/#">
            <Img className="sizeImg" fluid={data.file.childImageSharp.fluid} />
          </Link>
          <Link className="nav-link color-link" to="/#">
            Home
          </Link>
          <Link className="nav-link color-link" to="/#">
            Sobre nosotros
          </Link>
          <Link className="nav-link color-link" to="/#">
            Servicios
          </Link>

          <Link className="nav-link color-link" to="/#">
            Contactanos
          </Link>
        </ul>
      </nav>
    </header>
  )
}
