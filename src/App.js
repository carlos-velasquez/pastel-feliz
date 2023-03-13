import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './views/Home';
import Contacto from './views/Contacto';
import Navigation from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
      <Navigation />

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Contacto' element={<Contacto />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
