
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const[mode,setMode] = useState('light');
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
    if(mode === 'light'){
      setMode('dark');
        document.body.style.backgroundColor = 'black';
      setBtnText("Disable Dark Mode");
      showAlert("Dark mode has been enabled","success");

    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setBtnText("Enable Dark Mode")
      showAlert("Dark mode has been disabled","success");
    }
  }
  return (
    <>
    <Router>
  <Navbar title = "TextUtils" aboutText="About TextUtils" btnText = {btnText} toggleStyle = {toggleStyle} mode = {mode} />
  <Alert alert = {alert} />
  <div className="container">
  <Routes>
          <Route path="/about" element={<About mode = {mode} />}>
          </Route>
          <Route path="/" element={ <TextForm showAlert = {showAlert} heading = "Enter the text to analyze" mode = {mode} />}>
          </Route>
        </Routes>
  </div>
  </Router>
  </>
  );
}

export default App;
