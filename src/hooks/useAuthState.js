import { useState, useEffect } from 'react';

export default function useAuthState(auth) {
    const [isAuth, setisAuth] = useState(false)

    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        if(user) setisAuth(true)
        else setisAuth(false)
      })
    }, [isAuth])

    return isAuth;
}