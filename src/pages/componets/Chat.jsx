import React, { useState,  useEffect } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from "../../config-firebase.js";
import MessageBox from "./MessageBox.jsx";
import MessageForm from "./MessageForm.jsx";
import "../../css/chat.css";
import { Cookies } from "react-cookie";


export default function Chat() {
    const [text, setText] = useState('');
    const [UsersData, setUsersData] = useState();
    const col = collection(db, "messages");  
    const q = query(col, orderBy("createdAt"));
    var cook = new Cookies();

    useEffect(() => {
        const getData = async () => await onSnapshot(q, col, (doc) => {
            setUsersData(doc.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            })))
        })
        getData();
    }, [])

    const addMessage = () => {
        if(text !== ""){
            addDoc(col, {
                name: cook.get("nick"),
                color: cook.get("color"),
                text: text,
                createdAt: serverTimestamp(),
            })
            setText("");
        }
    }
    
    
    return (
        <div className="chat">
            {UsersData? <MessageBox UsersData={UsersData}/>:null}
            <MessageForm addMessage={addMessage} text={text} setText={setText} />
        </div>
    )
}