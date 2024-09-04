import React from 'react'

export default function Navbar() {
  return (
    <div className="w3-bar w3-white w3-card" id="myNavbar">
    <div className="w3-right w3-hide-small">
      <a href="#about" className="w3-bar-item w3-button">ABOUT</a>
      <a href="#team" className="w3-bar-item w3-button"><i className="fa fa-user"></i> TEAM</a>
      <a href="#work" className="w3-bar-item w3-button"><i className="fa fa-th"></i> WORK</a>
      <a href="#pricing" className="w3-bar-item w3-button"><i className="fa fa-usd"></i> PRICING</a>
      <a href="#contact" className="w3-bar-item w3-button"><i className="fa fa-envelope"></i> CONTACT</a>
    </div>

  </div>
  )
}
