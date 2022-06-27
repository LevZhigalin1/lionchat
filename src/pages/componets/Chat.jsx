import React, { useState, useEffect } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from "../../config-firebase.js"

export default function Chat() {
    const [UsersData, setUsersData] = useState()

    useEffect(() => {
        const getData = async () => await onSnapshot(collection(db, "messages"), (doc) => {
            setUsersData(doc.docs.map((doc) => ({
                id:doc.id,
                ...doc.data()
            })))
        })
        getData()
    }, [])

    return (
        <div className='messages'>
            {UsersData?.map((user) => 
                <div key={user.id}>
                    <div>{user.message}</div>
                </div>
            )}
        </div>
  )
}
