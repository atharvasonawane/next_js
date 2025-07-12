
"use client"

import { useEffect } from "react";

const Error = ({error}: {error:Error}) => {
    useEffect( () => {
        console.log(error);
    },[error])

    return ( 
        <div>
            <div className="text-red-500 text-2xl">
                Error Fetching Users Data
            </div>
        </div>
     );
    
}
 
export default Error;