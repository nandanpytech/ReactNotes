import React from 'react'

export default function Eventhandle() {
    const hi=()=>{
        console.log("hii")
    }
  return (
    <div>
        <button onClick={hi}>click</button>

    </div>
  )
}
