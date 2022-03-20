import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Link to="/RealTimeObjectDetection" target="_blank" rel="noopener noreferrer">RealTimeObjectDetection</Link>

        <Link to="/PosenetRealtime" target="_blank" rel="noopener noreferrer">PosenetRealtime</Link>

        <Link to="/HandPoseDetection" target="_blank" rel="noopener noreferrer">HandPoseDetection</Link>

        <Link to="/FacialLandmarkDetection" target="_blank" rel="noopener noreferrer">FacialLandmarkDetection</Link>

        <Link to="/GestureRecognition" target="_blank" rel="noopener noreferrer">GestureRecognition</Link>

        <Link to="/RealTimeBodySegmentation" target="_blank" rel="noopener noreferrer">RealTimeBodySegmentation</Link>
        
      </header>
    </div>


  );
}

export default App;
