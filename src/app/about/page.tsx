
"use client"

import { useRouter } from "next/navigation";

const About = () => {

    const router = useRouter();
    
    return(
    <div>
        <h1>About Us</h1>
        <button onClick={() => { router.push('/')}} className="bg-indigo-500 text-white rounded-full p-2">Go Home</button>
    </div>
    )
}
 
export default About;