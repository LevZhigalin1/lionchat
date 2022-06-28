import React, { useState,  useEffect } from "react";
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../../config-firebase.js";
//import MessageBox from './MessageBox.jsx' пока не знаю как это сделать 
import MessageForm from "./MessageForm.jsx";

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
<<<<<<< HEAD
        if(text !== ""){
            addDoc(col, {
=======
        if (text !== ""){
            addDoc(collection(db,'messages'), {
>>>>>>> 97e5c4d33fb641d3c6c09da66cef6f4c1d5535e9
                name: user.displayName,
                text: text,
                createdAt: serverTimestamp(),
            })
            setText("");
        }
<<<<<<< HEAD
    }
=======
    }//await ага ждать, ждать чего отправки сообщения?
>>>>>>> 97e5c4d33fb641d3c6c09da66cef6f4c1d5535e9

    
    return (
        <div className="chat">
            <div className="messages">
                {UsersData?.map((user) => 
                    <div key={user.id} className="message">
                        <div>{user.name}: {user.text}</div>
                    </div>
                )}
            </div>
            <MessageForm addMessage={addMessage} text={text} setText={setText} />
        </div>
    )
}
