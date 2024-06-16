// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'

function App() {
  const [mode, setMode] =useState('light') // Check for Dark mode and Light Mode 
  const [alert, setAlert] =useState(null);
  const showAlert =(message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    
    }, 2500);
}

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#022c6a';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <BrowserRouter>
    <Navbar title= "ReactEngg" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
      <Route path = "/" element = {<TextForm heading="Enter the text" mode={mode}/>}></Route>
      <Route path ="/About" element ={<About/>}></Route>
    </Routes>

    </div>
    </BrowserRouter>
    
  );
}

export default App;
