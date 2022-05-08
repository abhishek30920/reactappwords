import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');//whether dark mode enable mode enable or not
  
  const togglemode=()=>
    {
      if(mode=='light')
      {
        setMode('dark');
        document.body.style.backgroundColor='black'
      }
      else{
        setMode('light');
        document.body.style.backgroundColor='white'
      }
    }
  return (
   
    <>   
   <Router>
     <div>
             <Navbar title= 'Textutils' mode={mode} togglemode={togglemode}/>
    <div className="container my-3">
     
     
      <Routes>
          <Route path="/about" element={ <About />}/>
           
          
         
          <Route path="/" element={  <Textform heading="Enter the text to analyze" mode={mode}/>}/>
        
          
        </Routes>
      </div>
       </div>
       
       </Router>
  
    </>
  )
}

export default App;
