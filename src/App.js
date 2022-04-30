import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const[mode,setMode] = useState('Light');
  const [myStyle,setMyStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })
 
  const [btnText,setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = ()=>{
    if(myStyle.color == 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode");
      setMode('light');
    }
    else{
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Disable Dark Mode")
      setMode('dark');
    }
  }
  return (
    <>
    <div style = {myStyle}>
  <Navbar title = "TextUtils" aboutText="About TextUtils" btnText = {btnText} toggleStyle = {toggleStyle} mode={mode} />
  <div className="container">
  <TextForm heading = "Enter the text to analyze" myStyle={myStyle} />
  </div>
  </div>
  </>
  );
}

export default App;
