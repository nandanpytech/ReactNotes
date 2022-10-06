import React from 'react'
function Salary({salary}) {
    console.log("Rendering salary")
  return (
    <div>Salary - {salary}</div>
  )
}
export default React.memo(Salary)