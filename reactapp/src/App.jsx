import { Header } from "./Header"

function App() {
  return <>
    <h1>Jatin</h1>
    <h2>{5 > 3 ? "Greater" : "Smaller"}</h2>

  <Header names = "Jatink" rollNo = "420"/>
  <Header names = "Sahil" rollNo = "151"/>
  <Header names = "Jatin" rollNo = "420"/>
  <Header names = "Sahil" rollNo = "151"/>
  </>
}
export default App