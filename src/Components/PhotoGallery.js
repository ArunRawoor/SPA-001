import React, { Component } from 'react'
import download from '../Images/download.jpg';
import download1 from '../Images/download1.jpg';
import download2 from '../Images/download2.jpg';
import download3 from '../Images/download3.jpg';
import download4 from '../Images/download4.jpg';

export default class PhotoGallery extends Component {
  render() {
    return (
      <div>
        <img src={download} alt="Images"/>
        <img src={download1} alt="Images"/>
        <img src={download2} alt="Images"/>
        <img src={download3} alt="Images"/>
        <img src={download4} alt="Images"/>
        
      </div>
      
    )
  }
}
