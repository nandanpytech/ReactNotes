import React from 'react'

export default function Main2() {
    const list=[
        {
        id:1,
        name:"avatar"
    },
        {
        id:2,
        name:"nandan"
    },
        {
        id:3,
        name:"bilagi"
    }
]
const namelist=list.map(namess=><h1>{namess.id} and {namess.name}</h1>)
  return (
    <div>{namelist}</div>
  )
}


//how to pass namess as props
// const namelist=list.map(namess=> <Main3 event={namess}></Main3>)


// In Main3:
// <div>
// <h1>{namess.id} and {namess.name}</h1>
// </div>