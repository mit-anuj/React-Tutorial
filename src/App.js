import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    })
    // this will automatically close the alert after 1.5 seconds.
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const changeMode = (color)=>{
    if(color === 'light'){
      document.body.style.backgroundColor='white'
      setMode('light')
      showAlert("light mode has been enabled", "success");

    }
    else if(color === 'blue'){
      document.body.style.backgroundColor='#060634'
      setMode('dark')
      showAlert("dark mode has been enabled", "success");
    }
    else{
      document.body.style.backgroundColor='#072d1c'
      setMode('dark')
      showAlert("dark mode has been enabled", "success");
    }
  }
  // const toggleMode = () => {
  //   if (mode === "blue") {
  //     setMode("dark")
  //     document.body.style.backgroundColor = '#041c32'
  //     showAlert("dark mode has been enabled", "success");
  //     //* through this we can change the title dynamically.
  //     document.title = 'TextUtils - Dark Mode'
  //   }
  //   else if(mode ==='light') {
  //     setMode("light");
  //     document.body.style.backgroundColor = 'white'
  //     showAlert("light mode has been enabled", "success");
  //     document.title = 'TextUtils - Light Mode'
  //   }
  //   else{
  //     setMode('dark');
  //     document.body.style.backgroundColor='#0d3221'
  //     showAlert('dark mode is enabled','success')
  //   }
  // }
  return (
    <>
    {/* Router is used to shift between the pages without reloading the pages. */}
    <Router>
      <Navbar title="TextUtils" mode={mode} setMode={setMode} changeMode={changeMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        <Routes>      
          <Route path="/about" element={<About mode={mode}  />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode}/>} />
        </Routes>
      </div>
   </Router>
    </>
  );
}

export default App;
