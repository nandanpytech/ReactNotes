import React, { Component } from 'react'
export default class Welcom extends Component {
  render() 
  {
    const {name,age}=this.props;              //destructuring using props
    return (
      <div>
        <h1>Hii</h1>
      </div>
    )
  }
}
