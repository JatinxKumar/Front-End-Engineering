// without useState
import { Header } from "./Header"
function App() {
    const a = 0;
    function UpdateValue() {
        a++;
    }
    console.log(a);
    return (
        <>
            <h1>Hello {a} times from second.jsx(without useState)</h1>
            <button onClick={UpdateValue}>Click Me</button>
        </>
    );
}
export default App