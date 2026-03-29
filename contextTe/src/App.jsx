import { useState ,useContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'


import hulku from './components/context'

function App() {
  const [count, setCount] = useState(0)
   const {texting,text}=useContext(hulku)
  return (
    <>
    
    <h1 className='bg-amber-500'></h1>
    < input  className='bg-amber-300'   onChange={(e)=>{
           texting(e.target.value)
    }} /> 
    <h1>{text}</h1>
    </>
  )
}

export default App
