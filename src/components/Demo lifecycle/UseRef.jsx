import{ React,useState,useEffect,useRef} from 'react'
import Useontext from './Useontext';

export default function UseRef() {
    const [name, setname] = useState('')
    const count = useRef(0)
    useEffect(() => {
      count.current+=1;
    })
    
    const handle=(e)=>{
        setname(e.target.value)
    }
  return (
    <>
    <input type="text" value={name} name="" id="" onChange={handle}/>
    <div className="render">{count.current}</div>
    <Useontext></Useontext>
    </>
  )
}
