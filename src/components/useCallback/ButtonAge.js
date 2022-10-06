import React from 'react'

function ButtonAge(props) {
    console.log("Rendering Buttonage")
  return (
    <div>
        <button onClick={props.changeage}>changeage</button>
    </div>
  )
}
export default React.memo(ButtonAge)
