import React from "react"
import "./header.css"
import "bootstrap/dist/css/bootstrap.min.css"

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import { ElementLink } from "../styles/component"

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
          <Link className="navbar-brand colorText" to="/#">
            <Img className="sizeImg" fluid={data.file.childImageSharp.fluid} />
          </Link>

          <Link className="nav-link colorText" to="/#">
            <ElementLink>Home</ElementLink>
          </Link>
          <Link className="nav-link colorText" to="/#">
            <ElementLink>Sobre nosotros</ElementLink>
          </Link>
          <Link className="nav-link colorText" to="/#">
            <ElementLink>Servicios</ElementLink>
          </Link>

          <Link className="nav-link colorText" to="/#">
            <ElementLink>Contactanos</ElementLink>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
