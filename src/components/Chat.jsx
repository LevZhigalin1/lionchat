import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../config-firebase';

export default function Chat(){
    return(
        <div>
            <button onClick={() => signOut(auth)}>sign Out</button>
        </div>
    );
}