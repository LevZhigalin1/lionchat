import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './css/index.css';
import PageNotFound from './pages/PageNotfound';
import Navbar from './pages/componets/Navbar';
import PageAbout from './pages/PageAbout';
import PageChat from './pages/PageChat';
import PageProfile from './pages/PageProfile';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div id='ContentBox'>
      <Routes>
        <Route path="/" element={<PageChat />} />
        <Route path="/About" element={<PageAbout />} />
        <Route path="/Profile" element={<PageProfile />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </div>
  </BrowserRouter>
);

