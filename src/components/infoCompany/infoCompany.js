import React from "react"
import { H1 } from "../styles/component"
import "./infoCompany.css"

export default () => {
  return (

    <div className="jumbotron">
      <H1 size={"80px"}>Nuestra empresa</H1>
      <p className="lead">
        Nuestra empresa cuenta con más de 15 años de experiencia
        a realizados diferentes tipos de trabajos a empresas establecidas en nuestra economía local.</p>
      <hr className="my-4"/>
      <p>¡Desea saber más pulse acá!</p>
      <a className="btn btn-primary btn-lg" href="#" role="button">Leer mas</a>
    </div>
  )
}