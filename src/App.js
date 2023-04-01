import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'


function App() {
  const [mode, setMode]= useState("light");
  const toggleMode= ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#041c32'
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'

    }
  }
  return (
    <>
      <Navbar title="hello" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      <div className='container my-3' >
        <TextForm heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
