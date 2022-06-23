import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { auth } from "../config-firebase.js"

export default function Navbar() {
  const navigation = useNavigate()
  const [isAuth, setisAuth] = useState(false)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setisAuth(user)
    })
    if(isAuth) return navigation("/Chat");
    else return navigation("/Authorization");
  }, [isAuth])

  return (
    <header id="Navbar">
      <img src={require('../images/NavbarLogo.png')} id="NavbarLogo" alt="for sell"/>
      <ul id="Nav">
        {isAuth ?
          <li><Link to="/Chat">Чат</Link></li>
          :
          <li><Link to="/Authorization">Авторизация</Link></li>
        }
        <li><Link to="/About">О сайте</Link></li>
        <li><a href="https://github.com/LevZhigalin1/lionchat">Исходники</a></li>
      </ul>
    </header>
  );
}