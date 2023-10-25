import React from "react"
import { Component } from "react"
import headphone from "../img/related_products/item1.svg"
import headphone2 from "../img/related_products/item2.png"
import headphone3 from "../img/related_products/item3.svg"
import headphone4 from "../img/related_products/item4.svg"

class RelatedProducts extends Component {
  state = {
    background: {
      backgroundColor: " rgb(2, 2, 16)",
      //   paddingBottom: "200px",
    },
  }
  render() {
    return (
      <main className='d-flex flex-column' style={this.state.background}>
        <div className='d-flex align-items-center m-3 justify-content-between'>
          {" "}
          <h1 style={{ color: "white" }}>Related Products</h1>{" "}
          <button
            className='bg-transparent border-2 border-white text-white text-uppercase'
            style={{ borderRadius: "55px", padding: "10px  35px" }}>
            show all
          </button>
        </div>
        <ul
          className='main d-flex align-items-center justify-content-between'
          style={{ paddingLeft: "10%" }}>
          <li
            className='d-flex align-items-center flex-column w-25'
            style={{
              padding: "35px 15px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
            }}>
            <img
              src={headphone}
              style={{ padding: " 20px", height: " 264px", width: "240px" }}
              alt=''
            />
            <h1 className='fw-bold w-75' style={{ fontSize: "24px" }}>
              QuietComfort 35 wireless headphones II
            </h1>
            <span className='d-flex' style={{ color: "gray", width: "80%" }}>
              $449.99
            </span>
          </li>
          <li
            className='d-flex align-items-center flex-column w-25'
            style={{
              padding: "35px 15px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
            }}>
            <img
              src={headphone2}
              style={{ padding: " 20px", height: " 264px", width: "240px" }}
              alt=''
            />
            <h1 className='fw-bold w-75' style={{ fontSize: "24px" }}>
              QuietComfort 35 wireless headphones II
            </h1>
            <span className='d-flex' style={{ color: "gray", width: "80%" }}>
              $449.99
            </span>
          </li>
          <li
            className='d-flex align-items-center flex-column w-25'
            style={{
              padding: "35px 15px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
            }}>
            <img
              src={headphone3}
              style={{ padding: " 20px", height: " 264px", width: "240px" }}
              alt=''
            />
            <h1 className='fw-bold w-75' style={{ fontSize: "24px" }}>
              QuietComfort 35 wireless headphones II
            </h1>
            <span className='d-flex' style={{ color: "gray", width: "80%" }}>
              $449.99
            </span>
          </li>
          <li
            className='d-flex align-items-center flex-column w-25'
            style={{
              padding: "35px 15px",
              backgroundColor: "white",
              margin: "20px",
              borderRadius: "10px",
            }}>
            <img
              src={headphone4}
              style={{ padding: " 20px", height: " 264px", width: "240px" }}
              alt=''
            />
            <h1 className='fw-bold w-75' style={{ fontSize: "24px" }}>
              QuietComfort 35 wireless headphones II
            </h1>
            <span className='d-flex' style={{ color: "gray", width: "80%" }}>
              $449.99
            </span>
          </li>
        </ul>
      </main>
    )
  }
}

export default RelatedProducts
