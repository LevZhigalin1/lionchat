import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Authorization from './components/Authorization';
import About from './components/About';
import NotFoundPage from './components/NotFoundPage';
import Chat from './components/Chat';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAJOVtUxwQvZUDk_fdlYO6rwq1Av_pRoQM",
    authDomain: "lionchat-2d3c7.firebaseapp.com",
    projectId: "lionchat-2d3c7",
    storageBucket: "lionchat-2d3c7.appspot.com",
    messagingSenderId: "33610759165",
    appId: "1:33610759165:web:b23b7fffcdb10039177794",
    measurementId: "G-LMDSMVSNY9"
};
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <div id='ContentBox'>
      <Routes>
        <Route path="/Authorization" element={<Authorization />} />
        <Route path="/About" element={<About />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

