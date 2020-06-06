import React from "react"
import sellStyle from "./sellProduct.module.css"

export default () => {
  return <div className={`row align-items-center ${sellStyle.box}`}>
    <div className={`col-6 text-center`}>
      <p className={`ml-5 ${sellStyle.letter}`}>Contactanos para
        solicitor detalles de
        estos productos</p>
    </div>
    <div className="col-6 text-center">
      <button className={`btn ${sellStyle.button}`}>Contactanos</button>
    </div>
  </div>
}
