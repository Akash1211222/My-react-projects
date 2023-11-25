import { useState } from 'react'

function App() {
  const [color , setColor] = useState("black")

  return (
    <div className= "h-screen w-screen duration-700"style={{backgroundColor:color}} 
    >
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-0 px-3'>
        <div className='flex flex-wrap justify-center gap-2 shadow-2xl bg-white px-4 py-2 rounded-xl'>
          <button
            onClick={()=> setColor("red")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "red" }}>Red</button>
          
          <button
            onClick={()=> setColor("#89CFFD")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "#89CFFD" }}>Blue</button>
          
          <button
            onClick={()=> setColor("green")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "green" }}>Green</button>
          
          <button
            onClick={()=> setColor("yellow")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "yellow" }}>Yellow</button>
          
          <button
            onClick={()=> setColor("#F94892")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "#F94892" }}>Pink</button>
          
          <button
            onClick={()=> setColor("#FF7F3F")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "#FF7F3F" }}>Orange</button>
          
          <button
            onClick={()=> setColor("#B931FC")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "#B931FC" }}>Purple</button>
          
          <button
            onClick={()=> setColor("#FFEEF4")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "#FFEEF4" }}>Pink</button>
          
          <button
            onClick={()=> setColor("#16FF00")}
            className='outline-none px-4 py-1 rounded-2xl text-black shadow-2xl' style={{ backgroundColor: "#16FF00" }}>Neon Green</button>
          
          <button
            onClick={()=> setColor("#3F0071")}
            className='outline-none px-4 py-1 rounded-2xl text-white shadow-2xl' style={{ backgroundColor: "#3F0071" }}>Voilet</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
