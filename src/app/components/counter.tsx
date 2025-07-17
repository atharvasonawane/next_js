
"use client";
// This will treat this file as a client component because everything is by default is a server component in next js.

import {useState } from "react";
import { SignedIn, useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {

    const {isLoaded, userId, sessionId, getToken} = useAuth();
    const{isSignedIn,user} = useUser();

    console.log("Counter Component");
    const[count, setCount] = useState(0);

    if(!isLoaded || !isSignedIn){
        return null;
    }

    return ( 
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
     );
}
 