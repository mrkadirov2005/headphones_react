import React from "react"
import { Component } from "react"
import styled from "styled-components"
import left from "../img/premium/left-blue.svg"
import headphone from "../img/premium/headphone.svg"
import right from "../img/premium/right-blue.svg"
import headed from "../img/headed.svg"
import perfectSound from "../img/Perfect sound.svg"

class ActiveNoise extends Component {
  state = {
    background: {
      backgroundColor: " rgb(2, 2, 16)",
      paddingBottom: "200px",
    },
  }
  render() {
    return (
      <main className='w-100 position-relative' style={this.state.background}>
        <div className='w-100 d-flex align-items-center justify-content-between'>
          <img src={left} alt='' />
          <img src={right} alt='' />
        </div>
        <img
          src={headed}
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          alt=''
        />
        <img
          src={perfectSound}
          style={{
            position: "absolute",
            top: "40%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
          alt=''
        />
      </main>
    )
  }
}

export default ActiveNoise
