import React, { Component } from 'react'

class Memo extends Component {
  render() {
    console.log("memo component")
    return (
      <div>
        {this.props.message}
      </div>
    )
  }
}

export default React.memo(Memo)                    //It is because to stop rerendering the same message