import React, { useState } from 'react'

// export default function Usestate() {
//     const [color,setcolor]=useState("blue")
//   return (
//     <div>
//         Color is : {color}
//     </div>
//   )
// }

//storing objects
// export default function Usestate() {
//     const [color,setcolor]=useState({
//         brand:"high",
//         name:"nandan"

//     })
//   return (
//     <div>
//         Color is : {color.name}
//     </div>
//   )
// }

export default function Usestate() {
    const [count,setcount]=useState(0)
       
    const increment=()=>{
        for(let i=0;i<5;i++){
            setcount(prevstate=> prevstate+1)                     //it can't increment to 5 becoz every time loop runs it hold only just one previous value again it sets to the same value
        }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increment}>click me</button>
    </div>
  )
}


