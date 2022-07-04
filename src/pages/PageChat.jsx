import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config-firebase.js";
import useAuthState from "../hooks/useAuthState";
import Chat from "./componets/Chat";

export default function PageChat(){
    const isAuth = useAuthState(auth)

    return(
        <div>
            { isAuth ? 
                <Chat />
                :
                <button onClick={() => signInWithPopup(auth, provider)}>Авторизация через Google</button>
            }
        </div>
    );
}