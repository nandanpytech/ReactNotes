import React from 'react'
// function Greet() {
//     return <div>Hii</div>
// }
// export default Greet;



// const Greet=(props)=>{
// return <h1>Hi {props.name}</h1>
// }
// export default Greet;



//destructuring
export default function Greet(props) {
    const {name}=props;
  return (
    <div>Greet {name}</div>
  )
}



