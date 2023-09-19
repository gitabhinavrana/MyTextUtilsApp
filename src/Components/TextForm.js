import React, {useState} from 'react'

export default function TextForm(props) {

    const handleUpClick =() => {
        // console.log("Uppercase button was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick =() => {
        // console.log("Lowercase button was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")

    }
    const handleClearClick =() => {
        // console.log("Clear button was clicked" + text);
        let newText = '';
        setText(newText);
        props.showAlert("Text has been cleared","success")

    }

    const handleCopy = () => {
        var text = document.getElementById("myBox") ;
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard","success")

    }
    const done =() => {
        alert("Are you sure you want to submit ?")        
    }
    const handleOnChange =(event) => {
        // console.log("OnChange")
        setText(event.target.value);
    }
    const [text, setText]= useState('');
    
    // text="new text" // wrong way to change the text
    // setText=("new text"); // correct way to change the te
  return (
    <>
    <div className="container" style = {{color: props.mode ==='dark'?'white':'#042743'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor : props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-secondary mx-1" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-warning mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-success mx-1" onClick={done }>Submit</button>
        <button className="btn btn-info mx-1" onClick={handleCopy}>Copy Text</button>

    </div>
    <div className="container my-2" style = {{color: props.mode ==='dark'?'white':'#042743'}}>
        <h3>Your summary</h3>
        <p>{text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>

    </div>
    </>
  )
}
