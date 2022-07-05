import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../config-firebase.js";
import useAuthState from "../hooks/useAuthState";
import Chat from "./componets/Chat";
import { useCookies } from "react-cookie";

export default function PageChat(){
    const isAuth = useAuthState(auth)
    const [cookies, setCookie ] = useCookies();

    return(
        <div>
            { isAuth ? 
                <Chat />
                :
                <div className="text">
                    <button className="btn" onClick={() => 
                        {signInWithPopup(auth, provider);
                        setCookie("nick", "Инкогнито");
                        setCookie("color", "#497fab");}}>
                    <img className="googleLogo" src={require('../images/GoogleLogo.png')} alt="Logo" />
                    Авторизация через Google
                    </button>
                </div>
            }
        </div>
    );
}