import React from 'react';
import { auth } from "../config-firebase.js";
import { signOut } from 'firebase/auth';

export default function PageProfile() {
  return (
    <button onClick={() => signOut(auth)}>Выйти</button>
  )
}
