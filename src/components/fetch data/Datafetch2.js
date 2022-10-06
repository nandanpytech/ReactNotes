import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Datafetch2() {
    const [post, setpost] = useState({})
    const [id, setid] = useState(1)
    const [buttonid, setbuttonid] = useState(1)


    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${buttonid}`)
      .then(res=>{
        setpost(res.data)
      })
      .catch(error=>{
        console.log("Error occured")
      })
    
     
    }, [buttonid])

    const changehandler=()=>{
        setbuttonid(id)
    }

    
  return (
    <div>
        <input type="text" value={id} onChange={(e)=>setid(e.target.value)} name="" id="" />
        <button onClick={changehandler}>fetch post</button>
        <ul>
            <li>{post.title}</li>
        </ul>
    </div>
  )
}
