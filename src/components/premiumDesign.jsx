import React, { Component } from "react"
// import React {Component} from "react"
import styled from "styled-components"
import bg from "../img/Group 34.png"
import left from "../img/premium/left-blue.svg"
import headphone from "../img/premium/headphone.svg"
import right from "../img/premium/right-blue.svg"

class PremiumD extends Component {
  state = {
    bg: {
      //   backgroundImage: `url(${bg})`,
      backgroundImage: `url(${bg})`,
      width: "1520px",
      height: "1996px",
      backgroundColor: "  rgb(2, 2, 16)",
      //   backgroundColor: "green",
    },
  }
  render() {
    return (
      <div className='d-flex position-relative'>
        <div
          className='d-flex align-items-center justify-content-between'
          style={this.state.bg}>
          <img src={left} alt='' style={{ width: 300 }} />

          <img src={right} alt='' />
        </div>
        <img
          style={{
            // width: 900,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          src={headphone}
          alt=''
        />
        <h1
          style={{
            position: "absolute",
            transform: "translate(-50%)",
            left: "50%",
            top: "5%",
            fontSize: "64px",
            color: "white",
          }}>
          Premium design
        </h1>
        <p
          style={{
            position: "absolute",
            left: "50%",
            top: "10%",
            color: "white",

            transform: "translate(-50%)",
          }}>
          When you want to take your music anywhere, you need headphones built
          to keep up. With impact-resistant materials, glass-filled nylon, and
          corrosion-resistant stainless steel, they’re engineered to survive
          life on the go.
        </p>
      </div>
    )
  }
}

export default PremiumD
