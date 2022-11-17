import {React,useState} from 'react'

export default function Header() {
    const [arr, setarr] = useState(["1"])
    const handleclick=()=>{
        let newone=`${arr.length+1}`;
        setarr([...arr, newone])
        console.log(arr)
    }
    const pa=arr.map((e)=> <p key={e}>{e}</p>)
    console.log(pa)
  return (
    <>
   <button onClick={handleclick}>Add new element</button>
   {pa}
    </>
   
   

  )
}
