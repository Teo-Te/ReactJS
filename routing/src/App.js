import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Contact from './Contact';
import Services from './Services';
import {BrowserRouter, Route, Routes,} from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
        <h1>Routing</h1>
          
          <BrowserRouter>
          <Navbar />
            <Routes>
              <Route path= '/Home' element={<Home />} />
              <Route path= '/Contact' element={<Contact />} />
              <Route path= '/Services' element={<Services />} />
            </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
