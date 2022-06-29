import React, { useState,  useEffect } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../config-firebase.js";
import MessageBox from "./MessageBox.jsx";
import MessageForm from "./MessageForm.jsx";
import "../../css/chat.css";

export default function Chat() {
    const [text, setText] = useState('');
    const [UsersData, setUsersData] = useState();
    const user = auth.currentUser;
    const col = collection(db, "messages");  
    const q = query(col, orderBy("createdAt"));

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
                name: user.displayName,
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
