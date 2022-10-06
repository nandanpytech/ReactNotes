import React, { Component } from "react";

class B extends Component {
    constructor(props) {
        super(props);
        this.state = {favoritecolor: "red"};
        console.log("constructor")
      }
      static getDerivedStateFromProps(props,state){
        console.log("static called")
        return null
    }
      
      shouldComponentUpdate() {
        console.log("hii")
        return true;
      }
      changeColor = () => {
        this.setState({favoritecolor: "blue"});
      }
      render() {
        console.log("render")
        return (
          <div>
          <h1>My Favorite Color is {this.state.favoritecolor}</h1>
          <button type="button" onClick={this.changeColor}>Change color</button>
          </div>
        );
      }
 
    
}

export default B;
