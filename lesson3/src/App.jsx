import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'



function App() {
  const [prop,proped]=useState([])
  const [count, setCount] = useState(0)
  const [text,repo]=useState("")
  useEffect(()=>{
        const data = Object.keys(localStorage).map(key=>{
                    return  JSON.parse(localStorage.getItem(key));
  });
  proped(data);
},[]);

  return (
    <>  
     <button  className='bg-amber-600 text-amber-300 w-20 border-amber-500 border-t-amber-200 ml-1.5 mt-2.5'  type='text' onClick={(e)=>{
      setCount(count+1)
     }}> count={count}</button>

    <input className='bg-white ml-2.5 pl-1.5' type='text'onChange={(e)=>{
      
      repo(e.target.value)
    }}  />



   <button className='bg-green-400 ml-2.5 w-2xs'
   onClick={()=>{
    alert(text)
    if(!text)return;
    const newItem={text};
    localStorage.setItem(Date.now(),JSON.stringify(newItem));
    proped((prev)=>[...prev,newItem]);//Take all old items (...prev)
                                      //Add new item at the end
    repo("");  // empty the repo
   }}
   >Submit</button>


   <div className="">
    {prop.map( (item,index)=>(
    <p key ={index}>{item.text}</p>
   ) )}
   </div>



   <button className='bg-cyan-300 pr-2.5 ml-3.5 pl-2.5 mt-2.5 mr-20'
   onClick={()=>{
   localStorage.clear();
   proped([]);
   }}
   
   
   
   >REMOVE</button>
    </>
  )
}

export default App
