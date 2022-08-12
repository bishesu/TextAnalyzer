
import { useState } from 'react';
import './App.css';
import Navbar from './_components/Navbar';
import TextFrom from './_components/TextFrom';



const  App = () => {
  const [mode, setMode] = useState('light')


  const toggleMode = () => {
    if (mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor="black"
    } else {
      setMode("light")
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
  <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode} />
  <div className='container my-3'>

   <TextFrom heading="Enter the text to analyze" mode={mode}/>
  </div>
   </>
  );
}

export default App;
