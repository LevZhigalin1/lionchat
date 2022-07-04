import React, { useState } from "react";
import { auth } from "../config-firebase.js";
import { signOut } from "firebase/auth";
import { useCookies } from "react-cookie";

export default function PageProfile() {
  const user = auth.currentUser;
  const [userName, setUserName] = useState(user.displayName);
  const [gender, setGender] = useState("#497fab");
  const [cookies, setCookie ] = useCookies();

  return (
    <div className="text">
      <img src={user.photoURL} alt="userPhoto"/>
      <h3>
        Имя пользователя: 
        <input  maxlength="25" placeholder={cookies["nick"]} onChange={e => setUserName(e.target.value)} className="profileFormName"/>
      </h3>
      <h3>
        Ваш пол:
        <select value={cookies["gender"]} onChange={e => setGender(e.target.value)} className="profileFormGender">
          <option value={"#497fab"}>не выбрано</option>
          <option value={"#1e50b3"}>мужской</option>
          <option value={"#c586c0"}>женский</option>
          <option value={"#da5250"}>атакующий вертолёт(одобряем)</option> 
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
