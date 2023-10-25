// import logo from "./logo.svg"
import "./App.css"
import Header from "./components/header"
import React from "react"
import Body from "./components/body"
import PremiumD from "./components/premiumDesign"
import ActiveNoise from "./components/active-noise"
import Immersive from "./components/immersive"
import Battery from "./components/battery"
import RelatedProducts from "./components/related-products"
import BeFirst from "./components/BeFirst"
import Footer from "./components/footer"

function App() {
  return (
    <div>
      <Header />
      <Body />
      <PremiumD />
      <ActiveNoise />
      <Immersive />
      <Battery />
      <RelatedProducts />
      <BeFirst />
      <Footer />
    </div>
  )
}

export default App
