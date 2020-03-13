import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./footer.css"

import { Link } from "gatsby"
import { FaFacebookSquare, FaWhatsapp, FaPhoneSquare } from "react-icons/fa"

export default () => {
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
    </footer>
  )
}
