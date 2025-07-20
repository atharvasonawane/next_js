
"use client"

import { useCounterStore } from "./counter-store";

const App = () => {

    const count = useCounterStore((state) => state.count);

    return <OtherComponent count={count}></OtherComponent>
}

const OtherComponent = ({ count }: { count: number }) => {
    const incrementAsync = useCounterStore((state) => state.incrementAsync);
    const decrement = useCounterStore((state) => state.decrement);

    return (
        <div>
            {count}
            <div>
                <button onClick={incrementAsync}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
        </div>
    )

}

export default App;