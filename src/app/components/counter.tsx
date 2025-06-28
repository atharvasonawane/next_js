
"use client";
// This will treat this file as a client component because everything is by default is a server component in next js.

import {useState } from "react";

export const Counter = () => {

    console.log("Counter Component");
    const[count, setCount] = useState(0);
    return ( 
        <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
     );
}
 