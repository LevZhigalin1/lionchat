import React from "react";
import { Link } from 'react-router-dom';
import { auth } from "../../config-firebase.js";
import useAuthState from "../../hooks/useAuthState.js";
export default function Navbar() { 
  const isAuth = useAuthState(auth)

  return (
    <header className="Navbar">
      <img src={require('../../images/NavbarLogo.png')} className="NavbarLogo" alt="for sell"/>
      <ul className="Nav">
        <li><Link to="/">Чат</Link></li>
        <li><Link to="/About">О сайте</Link></li>
        <li><a href="https://github.com/LevZhigalin1/lionchat">Исходники</a></li>
        {isAuth? <li><Link to="/Profile">Профиль</Link></li>:null}
      </ul>
    </header>
  );
}