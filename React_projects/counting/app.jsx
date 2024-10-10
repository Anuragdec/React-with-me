import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App()
 {
        let [counter, setCount] = useState(1)


      let   addvalue = () =>
       {
          console.log("clicked", counter)
          
              counter = counter + 1
              setCount(counter)
              
          
       }


let removevalue = () => {
  console.log("clicked", counter)
  if (counter > 0) 
    {
      counter = counter - 1
      setCount(counter)
    } else
     { stop }
}
return (
  <>
    <h1>Tracking Counting</h1>
    <br />
    <button onClick={addvalue} >add  :<h5>{counter}</h5></button><br />
    <h1>{counter}</h1>
    <button onClick={removevalue}>remove :<h5>{counter}</h5></button>
    <h1>{counter}</h1>
  </>
)
}

export default App
