import React from "react"
import "./header.css"

import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"
import AniLink from "gatsby-plugin-transition-link/AniLink"

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
          <AniLink
            className="nav-link color-link"
            direction="right"
            paintDrip
            to="/"
            duration={1}
            hex="#8BBED3"
          >
            <Img className="sizeImg" fluid={data.file.childImageSharp.fluid} />
          </AniLink>
          <AniLink
            className="nav-link color-link"
            direction="right"
            paintDrip
            to="/"
            duration={1}
            hex="#8BBED3"
          >
            Home
          </AniLink>
          <AniLink
            className="nav-link color-link"
            direction="right"
            paintDrip
            to="/AboutUs/aboutUs"
            duration={1}
            hex="#8BBED3"
          >
            Sobre nosotros
          </AniLink>
          <AniLink
            className="nav-link color-link"
            direction="right"
            paintDrip
            to="/Service/service"
            duration={1}
            hex="#8BBED3"
          >
            Servicios
          </AniLink>
          <Link className="nav-link color-link" to="/#">
            Contactanos
          </Link>
        </ul>
      </nav>
    </header>
  )
}
