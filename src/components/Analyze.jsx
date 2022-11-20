import 'C:/MetroHacksTest/facemeshmediapipe/src/App.css';
import {FaceMesh} from '@mediapipe/face_mesh';
import * as Facemesh from '@mediapipe/face_mesh';
import * as cam from '@mediapipe/camera_utils';
import Webcam from 'react-webcam';
import {useRef,useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
function App() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  var camera = null
  const connect=window.drawConnectors;
  const [blinks,setBlinks] = useState(0);
  var eyesClosed = false;
  var lookingDown = false;
  const [count,setCount] = useState(0);
  const [xoffset,setXoffset] = useState(783);
  function onResults(results){
    canvasRef.current.width = webcamRef.current.video.videoWidth;
    canvasRef.current.height = webcamRef.current.video.videoHeight;
    const canvasElement=canvasRef.current;
    const canvasCtx=canvasElement.getContext("2d");
    canvasCtx.save();
    canvasCtx.clearRect(0,0,canvasElement.width,canvasElement.height)
    canvasCtx.drawImage(results.image,0,0,canvasElement.width,canvasElement.height);
    if(results.multiFaceLandmarks){
      for (const landmarks of results.multiFaceLandmarks) {
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_TESSELATION, {color: '#C0C0C070', lineWidth: 1});
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYE, {color: '#FF3030'});
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_RIGHT_EYEBROW, {color: '#FF3030'});
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYE, {color: '#30FF30'});
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LEFT_EYEBROW, {color: '#30FF30'});
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_FACE_OVAL, {color: '#E0E0E0'});
        connect(canvasCtx, landmarks, Facemesh.FACEMESH_LIPS, {color: '#E0E0E0'});
        if(Math.abs(landmarks[159].y-landmarks[145].y)/Math.abs(landmarks[33].x-landmarks[133].x)<0.27){
          if(eyesClosed===false){
            setBlinks(blinks+1);
            eyesClosed = true;
            if(583+150*blinks<=983){
              setXoffset(583+150*blinks);
            }
            console.log(blinks);
          }
        }
        else{
          eyesClosed = false;
        }
        if(Math.abs(landmarks[10].y-landmarks[152].y)/Math.abs(landmarks[356].x-landmarks[127].x)<1.3){
          lookingDown = true;
          setXoffset(583);
        }
      }  
    }
  }
  useEffect(()=>{
    const faceMesh = new FaceMesh({
      locateFile:(file)=>{
        return `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`;
      }
    })
    faceMesh.setOptions({
      maxNumFaces:1,
      minDetectionConfidence:0.5,
      minTrackingConfidence:0.5
    })
    faceMesh.onResults(onResults);
    if(typeof webcamRef.current!=="undefined" && webcamRef.current!==null){
      camera=new cam.Camera(webcamRef.current.video,{
        onFrame:async()=>{
          await faceMesh.send({image:webcamRef.current.video})
        },
        width:640,
        height:480
      });
      camera.start()
    }
  })
  return (
    
    <div className="App">
      <div className = "background"/>
      <h1 style={{
        textAlign:"center",
        color:"white",
        fontSize:30,
      }}>Analyzing...</h1>
      <div style={{ margin: '100px' }}>
        <img src="https://cdn.discordapp.com/attachments/881696270673141842/1043679640583155712/Screenshot_2022-11-19_181006.jpg" alt="scale" style={{ 
          width: '400px', 
          position:"absolute",
          left:600,
          right:0,
          top:600,
        }}/>
      </div>
      <div style={{ margin: '100px' }}>
        <img src="https://cdn.discordapp.com/attachments/881696270673141842/1043681997723279360/imagepointer-removebg-preview.png" alt="scale" style={{ 
          width: '40px', 
          position:"absolute",
          left:xoffset,
          right:0,
          top:640,
        }}/>
      </div>
      <li style={{
        fontSize: 30,
        color: "white",
        textalign: "center",
        position: "absolute",
        top: 700,
        left: 775,
      }}>
        <Link to={{
          pathname:"/results",
          state: blinks,
      }}>Finish!</Link>
      </li>
      <Webcam 
      ref = {webcamRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}/>
      <canvas
      ref = {canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          top: 80,
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}></canvas>
        
    </div>
    
  );
}

export default App;