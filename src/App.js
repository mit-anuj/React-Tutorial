import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar title="hello" aboutText="About" />
      <div className='container my-3' >
        {/* <TextForm heading="Enter the text to analyze" /> */}
      </div>
      <About />
    </>
  );
}

export default App;
