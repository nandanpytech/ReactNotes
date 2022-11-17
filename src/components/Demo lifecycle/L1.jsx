import React, { Component } from 'react'

export class L1 extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
        console.log("constructor called")
      }

      static getDerivedStateFromProps(props) {
        console.log("Derived called")
        return {favoritecolor: props.name };
      }

      shouldComponentUpdate() {
        return false;
      }

  render() {
    console.log(" Render called")
    const date=new Date(2021,1,1);
    const thou='1000'
    console.log(date+1000+thou)
    return (
        <>
      <div>{this.state.favoritecolor}</div>
      <button onClick={()=> this.setState({favoritecolor:"blue"})}>click</button>
      </>
    )
  }
}

export default L1