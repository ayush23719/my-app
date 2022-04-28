import React,{useState} from 'react'

export default function TextForm(props) {
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
    }
    else{
      setMyStyle({
        color: 'white',
        backgroundColor: '#212529'
      })
      setBtnText("Disable Dark Mode")
    }
  }
    const [text,setText] = useState('');
    const handleUpClick = ()=>{
        console.log('Uppercase Clicked ' + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = ()=>{
      console.log('Lowercase Clicked ' + text);
      let newText = text.toLowerCase();
      setText(newText);
  }
    const handleOnChange = (event)=>{
        console.log('You clicked handleOnChange ');
        setText(event.target.value);
    }
    let wordCount  = text.split(" ").length;
    const handleMic = ()=>{
      let msg = new SpeechSynthesisUtterance();
      msg.text = text;
      window.speechSynthesis.speak(msg);
      
  }
    
  return (
    <>
    <div className="container my-5" style = {myStyle}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value = {text} onChange = {handleOnChange}></textarea>
  </div>
  <button className="btn btn-primary mx-2" onClick = {handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary mx-3" onClick = {handleLowClick}>Convert to Lowercase</button>
  <button className = "btn btn-outline-info" onClick = {handleMic}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-volume-up" viewBox="0 0 16 16">
  <path d="M11.536 14.01A8.473 8.473 0 0 0 14.026 8a8.473 8.473 0 0 0-2.49-6.01l-.708.707A7.476 7.476 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303l.708.707z"/>
  <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.483 5.483 0 0 1 11.025 8a5.483 5.483 0 0 1-1.61 3.89l.706.706z"/>
  <path d="M10.025 8a4.486 4.486 0 0 1-1.318 3.182L8 10.475A3.489 3.489 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.486 4.486 0 0 1 10.025 8zM7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12V4zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11z"/>
</svg></button>
<div class="form-check form-switch mx-2 my-2">
  <input class="form-check-input" type="checkbox" role="switch" id="darkMode" onClick={toggleStyle} />
  <label class="form-check-label" for="darkMode">{btnText}</label>
</div>
  </div>
  <div className="container">
    <h2>Your text summary</h2>
    <p>{wordCount} words and {text.length} characters</p>
    <p>{0.008 * wordCount} Minutes to read</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  )
}
