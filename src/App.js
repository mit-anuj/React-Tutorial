import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'


function App() {
  const [mode, setMode]= useState("light");
  const [alert,setAlert]= useState(null); 

  function showAlert (message,type){
    setAlert({
      msg: message,
      type: type
    })
    // this will automatically close the alert after 1.5 seconds.
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode= ()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor='#041c32'
      showAlert("dark mode has been enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      showAlert("light mode has been enabled","success");
    }
  }
  return (
    <>
      <Navbar title="hello" aboutText="About"  mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3' >
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} toggleMode={toggleMode} />
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
