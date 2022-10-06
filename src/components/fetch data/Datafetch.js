import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function Datafetch() {
    const [post, setpost] = useState([])


    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(res=>{
        setpost(res.data)
      })
      .catch(error=>{
        console.log("Error occured")
      })
    
     
    }, [])

    
  return (
    <div>
        <ul>{post.map(p=><li>{p.id} and {p.title}</li>)}</ul>
    </div>
  )
}
