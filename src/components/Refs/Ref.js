import React, { Component } from 'react'

class Ref extends Component {
    constructor(props){
        super(props)
        this.inputref=React.createRef()
    }

    componentDidMount(){
        this.inputref.current.focus()
    }
  render() {
    return (
      <div>Ref
        <input type="text" ref={this.inputref} />
      </div>
    )
  }
}

export default Ref