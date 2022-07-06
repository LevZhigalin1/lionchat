import React from "react";
import { Link } from 'react-router-dom';
import { auth } from "../../config-firebase.js";
import useAuthState from "../../hooks/useAuthState.js";
export default function Navbar() { 
  const isAuth = useAuthState(auth);
  const user = auth.currentUser;

  return (
    <header className="Navbar">
      <img src={require('../../images/NavbarLogo.png')} className="NavbarLogo" />
      <ul className="Nav">
        <li><Link to="/">Чат</Link></li>
        <li><Link to="/About">О сайте</Link></li>
        <li><a href="https://github.com/LevZhigalin1/lionchat">Исходники</a></li>
      </ul>
      {isAuth?
        <Link to="/Profile" className="profile">
          <img className="profileLogo" src={user.photoURL} />
        </Link>:null}
    </header>
  );
}