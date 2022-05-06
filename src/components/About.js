import React from 'react'

export default function About(props) {
  let myStyleColor = {
    color: props.mode === 'dark'?'white':'black',
    backgroundColor: props.mode ==='dark'?'black':'white'
}
let myStyleBorder = {
  color: props.mode === 'dark'?'white':'black',
  backgroundColor: props.mode ==='dark'?'black':'white',
  border: props.mode ==='dark'?'1px solid #262829':'',
}
  return (
    <div className="Container"><div class="accordion" style={myStyleColor} id="accordionExample">
    <div class="accordion-item" style={myStyleBorder}>
      <h2 class="accordion-header" id="headingOne" style={myStyleColor}>
        <button  class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyleBorder}>
          <strong>Analyze Your Text</strong>
          </button>
      </h2>
      <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
        The app shows character, word, and sentence counts, and analyzes your text for readability to show you the readability score and how long it would take to read it.
        </div>
      </div>
    </div>
    <div class="accordion-item" style={myStyleBorder}>
      <h2 class="accordion-header" id="headingTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyleBorder}>
        <strong>Free To Use</strong>
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         This app is totally free to use, use it for official purpose or for personal use without any extra charges!
        </div>
      </div>
    </div>
    <div class="accordion-item" style={myStyleBorder}>
      <h2 class="accordion-header" id="headingThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyleBorder}>
        <strong>Browser Compatibility</strong>
        </button>
      </h2>
      <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
        <div class="accordion-body">
         It is compatible in various browsers like Edge, Google Chrome, Mozilla Firefox, Brave, Safari, Opera and so on...
        </div>
      </div>
    </div>
  </div></div>
  )
}
