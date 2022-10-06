import React from 'react'

function Buttonsalary(props) {
    console.log("Rendering buttonsalary")
  return (
    <div>
        <button onClick={props.changesalary}>changesalary</button>
    </div>
  )
}
export default React.memo( Buttonsalary)