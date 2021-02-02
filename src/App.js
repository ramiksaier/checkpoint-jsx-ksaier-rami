import './App.css';
import React from 'react'
import imag from '../src/imageInSrc.jpg'
import VideoPlayer from 'react-video-js-player'
import amour from '../src/amour.mp4'

function App() {
  return (
    <div className="body">
<h1 className="title-red">Your name here</h1>
 <div className="myimg">
<img src="imageInPublic.jpg" className="imm" alt="image2"/> 
<img src={imag} height="200px" width="200px" className="imm" alt="image2"/> 
</div>
<VideoPlayer
src={amour } className="video" height="320" width="400"/>
    </div>
  );
  }
export default App;
