import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import {
  GalleryProduct,
  CardInfo,
  ImgInformation,
  InfoCompany,
  Location
} from "../components/browserComponent"

const IndexPage = ({ data }) => {
  return (
    <>
      <Layout>
        <SEO title="Home"/>
        <GalleryProduct/>
        <CardInfo/>
        <ImgInformation/>
        <InfoCompany/>
        <Location/>
      </Layout>
    </>
  )
}
export default IndexPage
