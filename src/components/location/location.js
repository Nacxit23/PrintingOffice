import React from "react"


import locationStyle from "./location.module.css"
import { FaSearchLocation } from "react-icons/fa"
import { H1 } from "../styles/component"

export default () => {

  return (
    <div className={`jumbotron ${locationStyle.jumbotron}`}>
      <H1 size={"50px"}>
        <i className={`${locationStyle.iconColor}`}><FaSearchLocation/></i>
        <i className={`${locationStyle.titleStyle}`}> No escontramos en managua, Visitonos!</i>
      </H1>
      <iframe
        className={`img-fluid ${locationStyle.map}`}
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6277.609188366552!2d-86.23751369570174!3d12.113814303355836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sni!4v1588019887371!5m2!1sen!2sni"
        aria-hidden="false"
        tabIndex="0"/>
    </div>
  )

}