import React, { Component } from 'react'

 class A extends Component {
    //component1
    constructor(props){
        super(props)
        this.state={
            message:"hi nandan"
        }
        console.log("constructor called")
    }

    //component2                                             //it executes second also execute first after rerender
    static getDerivedStateFromProps(props,state){
        console.log("static called")
        return null
    }
     
    //component4                                         //it wil execute only once after first render
    componentDidMount(){
        console.log("componentdidmount")
    }

    changesmade=()=>{
        this.setState({
            message:"vikas"
        })
    }

    //component 3
  render() {                                                //always execute after static even first render or re-render
    console.log("render called")
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changesmade}>click me</button>
      </div>
    )
  }
}

export default A