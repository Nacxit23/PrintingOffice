import React from "react"
import Layout from "../components/layout/layout"
import SEO from "../components/seo"
import {
  GalleryProduct,
  CardInfo,
  ImgInformation,
} from "../components/browserComponent"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <GalleryProduct />
        <CardInfo />
        <ImgInformation />
      </Layout>
    </>
  )
}
export default IndexPage
