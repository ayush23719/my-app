import React,{useState} from 'react'

export default function TextForm(props) {
    const [text,setText] = useState('Enter text here');
    const handleUpClick = ()=>{
        console.log('Uppercase Clicked');
        setText('You clicked handleUpClick');
    }
    const handleOnChange = (event)=>{
        console.log('You clicked handleOnChange');
        setText(event.target.value);
    }
    
  return (
    <div>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value = {text} onChange = {handleOnChange}></textarea>
  </div>
  <button className="btn btn-primary" onClick = {handleUpClick}>Convert to Uppercase</button>
  </div>
  )
}
