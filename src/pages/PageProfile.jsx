import React, { useState } from "react";
import { auth } from "../config-firebase.js";
import { signOut } from "firebase/auth";


export default function PageProfile() {
  const [userName, setUsername] = useState(auth?.currentUser?.displayName)

  return (
    <div className="text">
        <h3>Имя пользователя:</h3>
        <input value={userName} onChange={e => setUsername(e.target.value)} className="profileFormName"/>
      <button onClick={() => signOut(auth)}>Выйти</button>
    </div>
  )
}
