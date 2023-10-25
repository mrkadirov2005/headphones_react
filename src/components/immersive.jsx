import React, { Component } from "react"
import immersible from "../img/immersive/immersive.png"
class Immersive extends Component {
  state = {
    background: {
      backgroundColor: " rgb(2, 2, 16)",
      paddingBottom: "200px",
    },
  }
  render() {
    return (
      <main
        className='d-flex align-items-center justify-content-between'
        style={this.state.background}>
        <img src={immersible} alt='immersive web' />
        <div>
          <h1 className='w-75 text-white' style={{ fontSize: "64px" }}>
            Perfect sound immersive world
          </h1>
          <p className='text-white w-75' style={{ fontSize: "18px" }}>
            QuietComfort 35 wireless headphones II are engineered with renowned
            noise cancellation. With the Google Assistant and Amazon Alexa
            built-in, you have instant access to millions of songs, playlists
            and more—hands free.
          </p>
        </div>
      </main>
    )
  }
}

export default Immersive
