import React from 'react'

export default function Main() {
    const name=["nandan","bharath","rajesh"]
    const namelist=name.map(s=><h1 key={name}>{s}</h1>)
    // const nameli=name.map((s,index)=><h1 key={index}>{s}</h1>)
  return (
    <div>{namelist}</div>
  )
}
