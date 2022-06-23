import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Authorization from './components/Authorization';
import About from './components/About';
import Chat from './components/Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div id='ContentBox'>
      <Routes>
        <Route path="/Authorization" element={<Authorization />} />
        <Route path="/About" element={<About />} />
        <Route path="/Chat" element={<Chat />} />
      </Routes>
    </div>
  </BrowserRouter>
);

