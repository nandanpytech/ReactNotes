import React, { Component } from 'react'

class Binding extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"hello",
        }
    }
    // goodbye=this.goodbye.bind(this);
    //  goodbye(){
    //     this.setState({
    //         message:"bye"
    //     })
    // }

    goodbye=()=>{
        this.setState({
            message:"bye"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        {/* <button onClick={this.goodbye}>click</button> */}
        <button onClick={this.goodbye}>click</button>
        </div>
    )
  }
}

export default Binding









//Binding is just bind 'this' keyword because value('this')=undefined when we dont bind it so that follow two steps to bind

// goodbye=this.goodbye.bind(this);
//      goodbye(){
//         this.setState({
//             message:"bye"
//         })
//     }

// goodbye=()=>{
//     this.setState({
//         message:"bye"
//     })
// }