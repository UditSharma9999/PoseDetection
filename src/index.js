import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

// Importing components
import RealTimeObjectDetection from './components/RealTimeObjectDetection/RealTimeObjectDetection'
import RealTimeBodySegmentation from './components/RealTimeBodySegmentation/RealTimeBodySegmentation'
import HandPoseDetection from './components/HandPoseDetection/HandPoseDetection'
import PosenetRealtime from './components/PosenetRealtime/PosenetRealtime'
import GestureRecognition from './components/GestureRecognition/GestureRecognition'
import FacialLandmarkDetection from './components/FacialLandmarkDetection/FacialLandmarkDetection'


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="RealTimeObjectDetection" element={<RealTimeObjectDetection />} />
        <Route path="PosenetRealtime" element={<PosenetRealtime />} />
        <Route path="HandPoseDetection" element={<HandPoseDetection />} />
        <Route path="GestureRecognition" element={<GestureRecognition />} />
        <Route path="RealTimeBodySegmentation" element={<RealTimeBodySegmentation />} />
        <Route path="FacialLandmarkDetection" element={<FacialLandmarkDetection />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
