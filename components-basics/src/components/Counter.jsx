import { useState } from 'react';

export default function Counter(props) {
    const [count, setCount] = useState(0);

    const incrementClickHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Counter</h1>

            <p>Counter: {count }</p>
            <button onClick={incrementClickHandler}>+</button>
            <button onClick={()=> setCount (count - 1)}>-</button>
        </div>
    )
}