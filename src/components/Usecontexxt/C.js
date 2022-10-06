import React, { useContext } from 'react'
import { MyContext } from '../../App'


export default function C() {
    const user=useContext(MyContext)
  return (
    <div>{user}</div>
  )
}
