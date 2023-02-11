import React, { useState } from "react";

export default function TextForm(props) {

  const vowe = () =>{
    let a,e,i,o,u,A,E,I,O,U,vowel;
    a =  text.split(" a").length
    e =  text.split(" e").length
    i =  text.split(" i").length
    o =  text.split(" o").length
    u =  text.split(" u").length
    A =  text.split(" A").length
    E =  text.split(" E").length
    I =  text.split(" I").length
    O =  text.split(" O").length
    U =  text.split(" U").length
    vowel = (a+e+i+o+u+A+E+I+O+U)-5;
    setVowel(vowel)
  };

  const handleUpClick = () => {
    // console.log("uppercase" + text)
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };
  const handleUplowClick = () => {
    // console.log("uppercase" + text)
    let newText = text.toLowerCase();
    setText(newText);
  };
  const Copy = () => {
    // console.log("uppercase" + text)
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Uppercase","success")
  };
  const handleOnChange = (event) => {
    // console.log("change")
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const [vowel, setVowel] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="Enter Text"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor: props.mode ==='dark'?'grey':'white',color: props.mode ==='dark'?'white':'black'}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUplowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={vowe}>
          Number of Vowel and Consonent
        </button>
      </div>
      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters{" "}
          {0.008 * text.split(" ").length} read time <br />
           {vowel} :Vowels {(text.split(" ").length)-vowel}: Consonent
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Something to preview"}</p>
      </div>
    </>
  );
}
