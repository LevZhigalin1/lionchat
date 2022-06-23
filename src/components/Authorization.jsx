import React from 'react'
import { signInWithPopup } from "firebase/auth";
import { auth, provider }  from "../config-firebase.js"

export default function Authorization(){

    function signIn() {
        signInWithPopup(auth, provider)
    }

    return (
        <div>
            <button onClick={signIn}>Google Log In</button>
        </div>
    )
}
