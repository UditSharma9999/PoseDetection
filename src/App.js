import { Link } from 'react-router-dom'
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="App-link">
          Hello React
        </div>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/RealTimeObjectDetection">RealTimeObjectDetection</Link>
        {/* <Link to="/RealTimeBodySegmentation">RealTimeBodySegmentation</Link> */}
        <Link to="/PosenetRealtime">PosenetRealtime</Link>
        <Link to="/HandPoseDetection">HandPoseDetection</Link>
        {/* <Link to="/GestureRecognition">GestureRecognition</Link> */}
        <Link to="/FacialLandmarkDetection">FacialLandmarkDetection</Link>
        
      </header>
    </div>


  );
}

export default App;
