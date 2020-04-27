import React, { Component } from "react"
import { Poster, Invoice, Print } from "../browserComponent"
import { Button } from "../styles/component"

export default class cardInfo extends Component {
  constructor() {
    super()
    this.state = {
      posterVisible: true,
      invoiceVisible: false,
      PrintVisible: false,
    }
  }
  render() {
    return (
        <div className="card text-center">
          <div className="card-header">
            <ul className="nav nav-pills card-header-pills">
              <li className="nav-item">
                <Button
                  color="rgba(235, 238, 247, 1)"
                  background="rgba(69, 71, 90, 1)"
                  onClick={() => this.visible()}
                >
                  Posteres
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  color="rgba(235, 238, 247, 1)"
                  background="rgba(69, 71, 90, 1)"
                  onClick={() => this.seeInvoice()}
                >
                  Facturas
                </Button>
              </li>
              <li className="nav-item">
                <Button
                  color="rgba(235, 238, 247, 1)"
                  background="rgba(69, 71, 90, 1)"
                  onClick={() => this.seePrint()}
                >
                  Impresiones
                </Button>
              </li>
            </ul>
          </div>
          <div className="row justify-content-center">
            <div className="col">
              {this.state.posterVisible ? <Poster /> : null}
              {this.state.invoiceVisible ? <Invoice /> : null}
              {this.state.PrintVisible ? <Print /> : null}
            </div>
          </div>
      </div>
    )
  }

  visible() {
    this.setState({
      posterVisible: true,
      invoiceVisible: false,
      PrintVisible: false,
    })
  }
  seeInvoice() {
    this.setState({
      invoiceVisible: true,
      posterVisible: false,
      PrintVisible: false,
    })
  }
  seePrint() {
    this.setState({
      invoiceVisible: false,
      posterVisible: false,
      PrintVisible: true,
    })
  }
}
