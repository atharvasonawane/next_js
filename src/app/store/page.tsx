
"use client"

import { useCounterStore } from "./counter-store";

const App = () => {

    const count = useCounterStore((state) => state.count);

    return <OtherComponent count={count}></OtherComponent>
}

const OtherComponent = ( {count}: {count:number} ) => {
    return <div>{count}</div>
}
 
export default App;