import React, { useState,  useEffect } from 'react'
import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp } from 'firebase/firestore'
import { db, auth } from "../../config-firebase.js"
//import MessageBox from './MessageBox.jsx'
import MessageForm from './MessageForm.jsx'

export default function Chat() {
    const [text, setText] = useState('');
    const user = auth.currentUser;
    const [UsersData, setUsersData] = useState()
    const q = query(collection(db, "messages"), orderBy("createdAt"))

    useEffect(() => {
        const getData = async () => await onSnapshot(q, collection(db, "messages"), (doc) => {
            setUsersData(doc.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            })))
        })
        getData()
        console.log(UsersData)
    }, [])

    const addMessage = async() => {
        await addDoc(collection(db,'messages'), {
            name: user.displayName,
            text: text,
            createdAt: serverTimestamp(),
        })
        setText("");
    }

    
    return (
        <div>
            <div className='messages'>
                {UsersData?.map((user) => 
                    <div key={user.id}>
                        <div>{user.name}: {user.text}</div>
                    </div>
                )}
            </div>
            <MessageForm addMessage={addMessage} text={text} setText={setText} />
        </div>
    )
}
