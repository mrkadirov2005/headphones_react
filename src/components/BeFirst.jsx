import React from "react"
import { Component } from "react"
import img from "../img/BeFirst/img.png"

class BeFirst extends Component {
  state = {}
  render() {
    return (
      <main className=' d-flex text-white bg-dark align-items-center justify-content-center'>
        <img
          src={img}
          style={{ paddingLeft: "150px", marginBottom: "0" }}
          alt=''
        />
        <div className='d-flex justify-content-center flex-column'>
          <h1 className='w-50'>Being first has its perks</h1>
          <p className='w-50'>
            Sign up to get more information about Bose, exclusive first looks at
            promotions, new products and more.
          </p>
          <div className='w-50 d-flex align-items-center justify-content-between'>
            <button
              className='text-capitalize  border-2 '
              style={{
                borderRadius: "90px",
                padding: "10px 40px",
                border: "2px solid white",
              }}>
              your e-mail here
            </button>
            <button
              className='text-uppercase  border-2 '
              style={{
                borderRadius: "90px",
                padding: "10px 40px",
                border: "2px solid white",
              }}>
              {" "}
              sign up
            </button>
          </div>
        </div>
      </main>
    )
  }
}

export default BeFirst
