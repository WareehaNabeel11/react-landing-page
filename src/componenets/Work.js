import React from 'react'
import images from '../assets/images/images.jpeg';
import tech_camera from '../assets/images/tech_camera.jpg';
import tech_mic from '../assets/images/tech_mic.jpg';
import tech_phone from '../assets/images/tech_phone.jpg';
import tech_sound from '../assets/images/tech_sound.jpg';
import tech_tablet from '../assets/images/tech_tablet.jpg';
import tech_tableturner from '../assets/images/tech_tableturner.jpg';
import tech_typewriter from '../assets/images/tech_typewriter.jpg';

function Work() {
  return (
    <div className="w3-container" style={{padding:"128PX 16PX"}} id="work">
    <h3 className="w3-center">OUR WORK</h3>
    <p className="w3-center w3-large">What we've done for people</p>
  
    <div className="w3-row-padding" style={{marginTop:"64px"}}>
      <div className="w3-col l3 m6">
        <img src={tech_mic} style={{width:"100px"}}  className="w3-hover-opacity" alt="A microphone"/>
      </div>
      <div className="w3-col l3 m6">
        <img src={tech_phone} style={{width:"100px"}}  className="w3-hover-opacity" alt="A phone"/>
      </div>
      <div className="w3-col l3 m6">
        <img src={images} style={{width:"100px"}}  className="w3-hover-opacity" alt="A drone"/>
      </div>
      <div className="w3-col l3 m6">
        <img src={tech_sound} style={{width:"100px"}}  className="w3-hover-opacity" alt="Soundbox"/>
      </div>
    </div>
  
    <div className="w3-row-padding w3-section">
      <div className="w3-col l3 m6">
        <img src={tech_tablet} style={{width:"100px"}} className="w3-hover-opacity" alt="A tablet"/>
      </div>
      <div className="w3-col l3 m6">
        <img src={tech_camera} style={{width:"100px"}}  className="w3-hover-opacity" alt="A camera"/>
      </div>
      <div className="w3-col l3 m6">
        <img src={tech_typewriter} style={{width:"100px"}}  className="w3-hover-opacity" alt="A typewriter"/>
      </div>
      <div className="w3-col l3 m6">
        <img src={tech_tableturner} style={{width:"100px"}}  className="w3-hover-opacity" alt="A tableturner"/>
      </div>
    </div>
  </div>
  )
}

export default Work