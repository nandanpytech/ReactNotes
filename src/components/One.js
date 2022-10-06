import React, { Component} from 'react'
import Two from './Two';

class One extends Component {
    constructor(props){
        super(props);
        this.state={
            message:"hello"
        }
    }
    changes=()=>{
        this.setState({
            message:"bye"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <Two eventhandler={this.changes}></Two>
      </div>
    )
  }
}

export default One