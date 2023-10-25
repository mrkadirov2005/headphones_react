import React from "react"
import { Component } from "react"
import battery from "../img/battery.png"

class Battery extends Component {
  state = {
    background: {
      backgroundColor: " rgb(2, 2, 16)",
      paddingBottom: "200px",
    },
  }
  render() {
    return (
      <main
        style={this.state.background}
        className='d-flex align-items-center justify-content-between w-100'>
        <div style={{ paddingLeft: "30px", color: "white" }}>
          <h1 className='w-50 mb-5' style={{ fontSize: "64px" }}>
            Up to 20 hours battery life
          </h1>
          <p className='w-75' style={{ fontSize: " 18px" }}>
            Enjoy up to 20 hours of listening, enough time to pore through this
            entire playlist. So you can keep the music — or the quiet — going
            all day long. And when it finally runs down, a quick 15-minute
            charge gives you another 2.5 hours.
          </p>
        </div>
        <img src={battery} alt='' />
      </main>
    )
  }
}

export default Battery
