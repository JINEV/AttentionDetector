import 'C:/MetroHacksTest/facemeshmediapipe/src/App.css';
import Switch from "./assets/Switch";
import { useState } from 'react';
import { Link } from 'react-router-dom';
export const Control =()=> {
  const [value, setValue] = useState(false);
  return (
    
    <div className="App">
      
      <div className = "rectangle2" style={{
        position:"absolute",
        top:0,
        left:0,
      }}/>
      <h1 style={{
        textAlign:"center",
        color:"white",
        fontSize:30,
      }}>Configure Settings</h1>

      <div className= "rectangle" style={{
        position:"absolute",
        top:100,
        left:600,
        right:0,
        bottom:0,
      }}/>
      <h2 style = {{
        textAlign:"center",
        position:"absolute",
        top:100,
        left:10,
        right:0,
        bottom:0,
        color:"white",
        fontSize:25,
      }}>Control Panel</h2>
      <h2 style = {{
        textAlign:"center",
        position:"absolute",
        top:185,
        left:-120,
        right:0,
        bottom:0,
        color:"white",
        fontSize:17,
      }}>Worksheet time?</h2>
      <h2 style = {{
        textAlign:"center",
        position:"absolute",
        top:270,
        left:-120,
        right:0,
        bottom:0,
        color:"white",
        fontSize:17,
      }}>Student Name:</h2>
      <form>
          <input type="text" style={{
            position:"absolute",
            top:285,
            left:810,
          }}/>
      </form>
      <h2 style = {{
        textAlign:"center",
        position:"absolute",
        top:355,
        left:-120,
        right:0,
        bottom:0,
        color:"white",
        fontSize:17,
      }}>Student Grade:</h2>
      <form>
          <input type="text" style={{
            position:"absolute",
            top:370,
            left:810,
          }}/>
      </form>
      <li style={{
        fontSize: 30,
        color: "white",
        textalign: "center",
        position: "absolute",
        top: 450,
        bottom: 0,
        left: 0,
        right: 0,
      }}>
        <Link to="/Analyze">Start!</Link>
      </li>
      <Switch
        isOn={value}
        handleToggle={() => {
          setValue(!value)
          console.log(value);
        }}
      />
      
        
    </div>
    
  );
}

export default Control;
