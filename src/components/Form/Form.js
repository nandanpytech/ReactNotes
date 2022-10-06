import React, { Component } from 'react'

class form extends Component {
    constructor(props){
        super(props)
        this.state={
            message:"",
            topic:"",
        }
    }
    changehandler=(event)=>{
        this.setState({
            message: event.target.value
        })
    }

    topicchange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }
    submit=event=>{
        alert(`${this.state.message} and ${this.state.topic}`)
    }
  render() {
    return (
      <div>
        <form action="" onSubmit={this.submit}>
        <label htmlFor="">Usename</label>
        <input type="text" value={this.state.message} onChange={this.changehandler} name="" id="" />

        <div>
            <select name="" value={this.state.topic} onChange={this.topicchange} id="">
                <option value="react">react</option>
                <option value="angular">angular</option>
                <option value="js">js</option>
            </select>
        </div>

        <button type='submit'>click me</button>
        </form>
      </div>
    )
  }
}

export default form
