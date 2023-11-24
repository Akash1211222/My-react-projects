import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {

  let [color, setColor] = useState("olive")

  return (
    
      <div className="h-screen w-full duration-200"
        style={{backgroundColor: color}}
      >
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-2 '>
        <div></div>
        </div>
      </div>
      
     
    
  )
}

export default App
