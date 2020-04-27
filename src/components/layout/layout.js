import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Header, Footer } from "../browserComponent"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div style={{ backgroundsColor: "#8BC6EC", backgroundImage: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%" }}
           className="row justify-content-xl-center">
        <div style={{ backgroundsColor: "#F7F7F7"}} className="col-xl-10 col-lg-auto">
          <main> {children} </main>
        </div>
      </div>
      <Footer/>
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout