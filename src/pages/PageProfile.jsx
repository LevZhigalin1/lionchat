import React from "react";
import { auth } from "../config-firebase.js";
import { signOut } from "firebase/auth";

export default function PageProfile() {
  const user = auth.currentUser;

  return (
    <div className="text">
      <h1 style={{color: "darkblue"}}>Профиль</h1>
      <img src={user.photoURL} alt="for sell" />
      <div>Имя пользователя: {user.displayName}</div>
      <button onClick={() => signOut(auth)}>Выйти</button>
    </div>
  )
}
