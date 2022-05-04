
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('Light');
  const [myStyle,setMyStyle] = useState({
    color : 'black',
    backgroundColor : 'white'
  })
  const[alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
     setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [btnText,setBtnText] = useState("Enable Dark Mode");
  const toggleStyle = ()=>{
    if(myStyle.color === 'white'){
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setBtnText("Enable Dark Mode");
      setMode('light');
      showAlert("Light mode has been enabled","success");

    }
    else{
      setMyStyle({
        color: 'white',
        backgroundColor: 'black'
      })
      setBtnText("Disable Dark Mode")
      setMode('dark');
      showAlert("Dark mode has been enabled","success");
    }
  }
  return (
    <>
    <Router>
    <div style = {myStyle}>
  <Navbar title = "TextUtils" aboutText="About TextUtils" btnText = {btnText} toggleStyle = {toggleStyle} mode={mode} />
  <Alert alert = {alert} />
  <div className="container">
  <Routes>
          <Route path="/about" element={<About myStyle={myStyle} />}>
          </Route>
          <Route path="/" element={ <TextForm showAlert = {showAlert} heading = "Enter the text to analyze" myStyle={myStyle} />}>
          </Route>
        </Routes>
  </div>
  </div>
  </Router>
  </>
  );
}

export default App;
