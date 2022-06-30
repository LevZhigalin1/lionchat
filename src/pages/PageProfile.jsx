import React from "react";
import { auth } from "../config-firebase.js";
import { signOut } from "firebase/auth";

export default function PageProfile() {
  const user = auth.currentUser;
  const name = user.displayName;

  return (
    <div className="text">
      <img src={user.photoURL} alt="for sell" />
      <form className="profileForm">
        <label for="profileFormName">Имя пользователя:</label>
        <input placeholder={name} className="profileFormName" required/>
        <button onClick={() => signOut(auth)}>Выйти</button>
      </form>
    </div>
  )
}
