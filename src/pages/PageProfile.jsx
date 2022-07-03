import React, { useState } from "react";
import { auth, user } from "../config-firebase.js";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";

export default function PageProfile() {
  const [userName, setUserName] = useState(user.displayName);
  const [gender, setGender] = useState("");
  const [cookies, setCookie ] = useCookies();

  return (
    <div className="text">
      <img src={user.photoURL} />
      <h3>
        Имя пользователя: 
        <input placeholder={cookies["nick"]} onChange={e => setUserName(e.target.value)} className="profileFormName"/>
      </h3>
      <h3>
        Ваш пол:
        <select value={gender} onChange={e => setGender(e.target.value)} className="profileFormGender">
          <option value={"darkturquoise"}>не выбрано</option>
          <option value={"darkblue"}>мужской</option>
          <option value={"pink"}>женский</option>
          <option value={"red"}>атакующий вертолёт(одобряем)</option> 
        </select>
      </h3>
      <button onClick={() => {
        if(userName !== "") setCookie("nick", userName);
        setCookie("color", gender);
      }}>Сохранить изменения</button>
      <button onClick={() => signOut(auth)}>Выйти</button>
    </div>
  )
}
