import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register1 from './Register1'
import Register2 from './Register2'
import Login from './Login'
// 1. import `NextUIProvider` component
// import {NextUIProvider} from "@nextui-org/system";
function App() {
  // const [count, setCount] = useState(0)

  return (
   <main className="App">
     <Register1 />
     <Register2 />
     {/* <Login /> */}
   </main>
  )
}

export default App
