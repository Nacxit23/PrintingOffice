import React from "react"
import { Layout, OurService, ProductSer,SellProduct } from "../../components/browserComponent"
// import ServiceStyle from "./service.module.css";

const service = () => {
  return (
    <Layout>
      <OurService/>
      <ProductSer/>
      <SellProduct/>
    </Layout>
  )
}
export default service