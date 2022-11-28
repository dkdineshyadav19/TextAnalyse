import React,{useState} from 'react'


export default function TextForm(props) {
  //Uppercase function  
  const upperCase = ()=>{
    
        let newText=text.toUpperCase();
        setText(newText)
    }
//LowerCase  function
    const lowerCase = ()=>{
         
        let newText=text.toLowerCase();
        setText(newText)
    }
// function    
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }
//clear Text function
    const clearText = ()=>{
         
      let newText='';
      setText(newText)
  }
  //Text color change function
//   const colorChange = (event)=>{
         
//     let newColor=event.target.value;
//     setColor(newColor);
//     let col = document.getElementsByClassName('form-control');
//     col.style.color=newColor;
    
// }
/// copy text to clipboard
  const copyText =()=>{
    
    navigator.clipboard.writeText(text);
  }
  /// remove rextra spaces
  const removeSpace =()=>{
    var remove = text.split(/[ ]+/);
    setText(remove.join(" "));
  }

    const [text, setText] = useState('');//states  for binding two way data
    // const [color, setColor] = useState('#2f2f2f');//states  for binding two way data
    // setText('Enter Text Here!');
    
  return (
    <>
      <div className="mb-3 container my-3">
        <h2>{props.heading}</h2>
        <label  className="form-label">.....</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handleOnChange} ></textarea>
        <button className="btn btn-secondary my-3 mx-1" disabled={text.length===0}  onClick={upperCase}>TT</button>
        <button className="btn btn-secondary my-3 mx-1" disabled={text.length===0}  onClick={lowerCase}>tt</button>
        <button className="btn btn-secondary my-3 mx-1" disabled={text.length===0}  onClick={clearText}>Clear</button>
        
        <button className="btn btn-secondary my-3 mx-1" disabled={text.length===0}  onClick={copyText}>Copy</button>
        <button className="btn btn-secondary my-3 mx-1" disabled={text.length===0}  onClick={removeSpace}>Remove Extra Spaces</button>
        <button className="btn btn-secondary my-3 mx-1"disabled={text.length===0}   onClick={clearText}>Find and replace </button>
        {/* <input type="color" className="inpCol my-3 mx-1" disabled={text.length===0}  value={color} onChange={colorChange}/> */}
    


        <h3 className=''>Preview</h3>
        <p>{text.length>0?text:"Type Something to preview here"}</p>
      </div>
      <div className="container">
        <h3>Your Text Summary :</h3>
        <p>{text.split(/\s+/).filter( (el)=>{
          return el.length!==0;
        }).length} Words and {text.length} Characters</p>
        <p> Time take to read this text  {0.008*text.split(' ').filter( (el)=>{
          return el.length!==0;
        }).length} Min</p>
      </div>

    </>
  )
}
