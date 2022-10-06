import React, { Component } from 'react'
import Memo from './Memo'

 class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"hii"
        }
    }
    componentDidMount(){
        setInterval(() => {
            this.setState({
                message:"hii"
            })
        }, 1000);
    }
    
  render() {
    console.log("Parent component")
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Memo message={this.state.message}></Memo>
      </div>
    )
  }
}

export default Main