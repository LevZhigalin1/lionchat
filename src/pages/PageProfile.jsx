import React, { useState } from "react";
import { auth } from "../config-firebase.js";
import { signOut } from "firebase/auth";


export default function PageProfile() {
  const user = auth.currentUser;
  const [username, setUsername] = useState(user.displayName)

  return (
    <div className="text">
        <img src={user.photoURL} alt="for sell" />
        <h3>Имя пользователя:</h3>
        <input placeholder={username} value={username} onChange={e => setUsername(e.target.value)} className="profileFormName" required/>
      <button onClick={() => signOut(auth)}>Выйти</button>
    </div>
  )
}
