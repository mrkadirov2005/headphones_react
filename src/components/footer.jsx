import React from "react"
import { Component } from "react"
import logo from "../img/logo.svg"

class Footer extends Component {
  state = {}
  render() {
    return (
      <main className='d-flex align-items-center p-4 bg-black justify-content-center'>
        <img src={logo} alt='' />
        <ul className='d-flex align-items-center justify-content-around m-0 w-50'>
          <li className='d-flex text-white align-items-center'>Headphones</li>
          <li className='d-flex text-white align-items-center'>Speakers</li>
          <li className='d-flex text-white align-items-center'>Support</li>
          <li className='d-flex text-white align-items-center'>Contact</li>
        </ul>
      </main>
    )
  }
}
export default Footer
