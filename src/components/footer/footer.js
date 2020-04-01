import React from "react"
import "./footer.css"

import { Link, useStaticQuery, graphql } from "gatsby"
import { FaFacebookSquare, FaWhatsapp, FaPhoneSquare } from "react-icons/fa"

export default () => {
  const data = useStaticQuery(graphql`
    query copyRight {
      site {
        siteMetadata {
          copyRight
        }
      }
    }
  `)
  return (
    <footer className="footer-color">
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <Link className="nav-link color-link" to="/#">
            <FaFacebookSquare />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color-link" to="/#">
            <FaWhatsapp />
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link color-link" to="/#">
            <FaPhoneSquare /> #0000000
          </Link>
        </li>
      </ul>
      <div className="sub-footer-color row justify-content-center">
        {data.site.siteMetadata.copyRight}
      </div>
    </footer>
  )
}
