import React, { useState } from "react";
import { auth } from "../config-firebase.js";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";

export default function PageProfile() {
  const [userName, setUserName] = useState("")
  const [cookies, setCookie ] = useCookies()

  return (
    <div className="text">
      <h3>Имя пользователя:</h3>
      <input placeholder={cookies["nick"]} onChange={e => setUserName(e.target.value)} className="profileFormName"/>
      <button onClick={() => {if(userName !== "") setCookie("nick", userName)}}>Создать</button>
      <button onClick={() => signOut(auth)}>Выйти</button>
    </div>
  )
}
