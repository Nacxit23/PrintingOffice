import React from "react"
import { H1 } from "../styles/component"
import { FaInfoCircle } from "react-icons/fa"
import infoComp from "./infoCompany.module.css"
import { Button } from "../styles/component"

export default () => {
  return (
    <div className={`${infoComp.jumbotron}`}>
      <H1 size={"80px"}> Nuestra empresa </H1>
      <p className="lead">
        Nuestra empresa cuenta con más de 15 años de experiencia a realizados
        diferentes tipos de trabajos a empresas establecidas en nuestra economía
        local.
      </p>
      <hr className="my-4" />
      <p> ¡Desea saber más pulse acá! </p>
      <Button
        color={"#FFFFFF"}
        background={"#00BFFF"}
        marginBottom={"30px;"}
        href="/#"
      >
        Leer mas
        <i className={infoComp.icon}>
          <FaInfoCircle />
        </i>
      </Button>
    </div>
  )
}
