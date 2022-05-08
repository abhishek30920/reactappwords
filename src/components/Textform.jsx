import React,{useState} from 'react';

export default function Textform(props) {
  const handleupclick=()=>
    {
     
      let newText=text.toUpperCase();
      setText(newText)
    }
  const handlelowclick=()=>
    {
     let newText=text.toLowerCase();
      setText(newText)
    }

  const handleclclick=()=>
    {
      let newText=text.replace(text," ")
      setText(newText)
    }
  const handlecopy=()=>
    {
      console.log("dnjsnd")
      let text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    }
  const handleonchange=(event)=>
    {
      console.log("on change");
      
      setText(event.target.value) 
      //to set the new value 
    }
  
  
  
  const[text,setText]=useState("") //use state
  //text="newtext "wrong way to change the state"
  //settext("new tex"t) //correct way to change
  
  return(
  <>
    <div className="container" >
     <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" value={text}  onChange={handleonchange} id="mybox" rows="8"></textarea>
  <button className="btn btn-primary" onClick={handleupclick}> Convert to Uppercase</button>
    <button className="btn btn-primary" onClick={handlelowclick}> Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleclclick}> Clear</button>
   <button className="btn btn-primary" onClick={handlecopy}> CopyText</button>
  
</div>
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
    <p>{0.08 * text.split(" ").length}Minutes read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </div>
  </>
    
  )
  
}