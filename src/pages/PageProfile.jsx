import React, { useState } from "react";
import { auth } from "../config-firebase.js";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";

export default function PageProfile() {
  const [userName, setUsername] = useState("")
  const [cookies, setCookie, removeCookie] = useCookies()

  return (
    <div className="text">
      <h3>Имя пользователя:</h3>
      <input value={cookies["nick"]} onChange={e => setUsername(e.target.value)} className="profileFormName"/>
      <button onClick={() => setCookie("nick", userName)}>Создать</button>
      <button onClick={() => signOut(auth)}>Выйти</button>
    </div>
  )
}
