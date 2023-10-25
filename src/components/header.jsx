import React, { Component } from "react"
import logo from "../img/logo.svg"
import bg from "../img/bg.jpg"
import HeadPhone from "../img/bose 1.svg"
import Group5 from "../img/Group 5.svg"
import ellipse3 from "../img/Ellipse 3.svg"
import ellipse4 from "../img/Ellipse 4.svg"
import ellipse5 from "../img/Ellipse 5.svg"
import headPhone from "../img/headphones_1.png"
import headPhone1 from "../img/headphones_2.png"
import headPhone2 from "../img/headphones_3.png"
import headPhone3 from "../img/headphones_4.png"
import headPhone4 from "../img/headphones-5.png"
import vectorRight from "../img/vector-right.svg"
import vectorLeft from "../img/Vector-left.svg"

class Header extends Component {
  state = {
    mystyle: {
      backgroundImage: `url(${bg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  }
  render() {
    return (
      <div className='  w-100%    p-2 bg-black' style={this.state.mystyle}>
        <div
          className='d-flex
         w-50 justify-content-between 
         m-lg-3  '
          style={{ marginBottom: "120px" }}>
          <img src={logo} alt='' />
          <ul
            className='d-flex m-2 p-2
          '>
            <li className='m-2 text-white d-flex p-2'>Headphones</li>
            <li className='m-2 text-white d-flex p-2 '>Speakers</li>
            <li className='m-2 text-white d-flex p-2'>support</li>
          </ul>
        </div>

        <div className='d-flex align-items-center m-lg-5 justify-content-between'>
          <div className='left-part w-50'>
            <h1
              className='d-flex text-white mb-5  w-100 '
              style={{
                fontSize: "80px",
              }}>
              QuietComfort 35 wireless <br /> headphones II
            </h1>
            <span className='d-flex text-white  fs-1 mb-5 '>
              select your color:
            </span>
            <div className='d-flex w-25 align-items-center justify-content-between mb-2'>
              <img src={Group5} alt='' />
              <img src={ellipse3} alt='' />
              <img src={ellipse4} alt='' />
              <img src={ellipse5} alt='' />
              <img src='' alt='' />
            </div>
            <span className=' text-white fs-2 w-75 mb-5'>Silver</span>
            <div
              className='d-flex align-items-center 
             p-3 w-50 justify-content-between'>
              <h1 className='text-white mt-4'>$229</h1>
              <button
                className='btn btn-secondary badge bg-white text-black text-uppercase  p-2
              '>
                {/* {" "} */}
                buy now
              </button>
            </div>
          </div>
          <div className='right-part d-flex  w-50'>
            <img src={HeadPhone} alt='' />
          </div>
        </div>
        <div
          className='image-part d-flex align-items-center justify-content-between mt-5'
          style={{ marginBottom: "200px", paddingTop: "30px" }}>
          <img src={vectorLeft} alt='' />
          <img src={headPhone} alt='' />
          <img src={headPhone1} alt='' />
          <img src={headPhone2} alt='' />
          <img src={headPhone3} alt='' />
          <img src={headPhone4} alt='' />
          <img src={vectorRight} alt='' />
        </div>
      </div>
    )
  }
}

export default Header
