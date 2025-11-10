// with useState
import { Header } from "./Header"
import { useState } from 'react'
function App() {
    const [count, setCounter] = useState(0);
    function UpdateValue() {
        setCounter(count + 1);
    }
    console.log(count);
    return (
        <>
            <h1>Hello {count} times from first.jsx(with useState)</h1>
            <button onClick={UpdateValue}>Click Me</button>
        </>
    );
}
export default App