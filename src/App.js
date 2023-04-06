import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type
    })
    // this will automatically close the alert after 1.5 seconds.
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = '#041c32'
      showAlert("dark mode has been enabled", "success");
      //* through this we can change the title dynamically.
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = 'white'
      showAlert("light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode'

    }
  }
  return (
    <>
    {/* Router is used to shift between the pages without reloading the pages. */}
    {/* <Router> */}
    {/* We are disabling router to deplay web page on github because github does not work properly with routing so avoid any kind of 
    error we are commenting it out.
    though router doesn't have any problem working when we deploy it on any server. */}
    {/* to deploy this app on the github pages we used https://create-react-app.dev/docs/deployment/ and on this search for github pages 
    and follow those steps. */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert = {alert}/>  
      <div className="container my-3">
        {/* <Routes>    */}
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/" element={<TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode}/>} /> */}
          <TextForm heading="Enter the text to analyze below" onShowAlert={showAlert} mode={mode}/>
        {/* </Routes> */}
      </div>
   {/* </Router> */}
    </>
  );
}

export default App;
