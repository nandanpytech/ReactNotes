import React from 'react'

function Age({age}) {
    console.log("Rendering Age")
  return (
    <div>Age -{age}</div>
  )
}

export default React.memo(Age)
