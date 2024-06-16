import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText= text.toUpperCase();
        setText(newText)
        // props.showAlert("converted to Upper Case","success");
    }
    const handleLoClick = ()=>{
      let newText= text.toLowerCase();
      setText(newText)
      // props.showAlert("converted to Lower Case","success");
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      // props.showAlert("Copied","success");
    }

    const handleExtraSpaces=()=>{
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
      // props.showAlert("All the extra spaces are removed","success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const[text, setText]= useState('Enter text here')

  return (
    <>
    <div className='container' style={{backgroundColor: props.mode==='dark'?'#022c6a':'white', color:props.mode==='dark'?'white':'black'}} >
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#022c6a':'white', color:props.mode==='dark'?'white':'#022c6a'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        
    </div>

    <div className="container my-3" style={{backgroundColor: props.mode==='dark'?'#022c6a':'white', color:props.mode==='dark'?'white':'black'}}>
      <h3>Your text summary</h3>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:'Enter something to preview'}</p>
    </div>
    
    </>
  )
}
