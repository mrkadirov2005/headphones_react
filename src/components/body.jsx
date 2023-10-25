import React, { Component } from "react"
import styled from "styled-components"
import HeadPhoneWearingGirl from "../img/headPhoneWearingGirl.png"
import vector from "../img/Vector.svg"
import vectorR from "../img/v-right.svg"

class Body extends Component {
  state = {
    backgroun: {
      backgroundImage: `url(${HeadPhoneWearingGirl})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",

      // objectFit: "cover",
      height: "1079px",
    },
    h1: {
      fontSize: "100px",
      color: "white",
      textAlign: "center",
      width: "75%",
    },
    button: {
      border: "2px solid white",
    },
  }
  render() {
    return (
      <div
        className='d-flex align-items-center flex-column w-100 justify-content-center h-100px'
        style={this.state.backgroun}>
        <h5>Bose Headphones</h5>
        <h1 style={this.state.h1}>Smarter than your average headphones</h1>
        <div className='w-25 d-flex justify-content-between mt-5  align-align-items-center'>
          <button className='bg-white text-black p-2 rounded'>
            {" "}
            Shop now <img src={vector} className='p-3 ' alt='' />
          </button>
          <button
            style={this.state.button}
            className='bg-transparent p-1 rounded text-white '>
            Learn more <img src={vectorR} className='p-3' alt='' />
          </button>
        </div>
      </div>
    )
  }
}

export default Body
