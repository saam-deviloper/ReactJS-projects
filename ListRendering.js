import React, { Component } from "react";

export default class ListRendering extends Component {
  constructor() {
    super();
    this.state ={
        cars : ['benz','bmw','porche','audi']
    }
  }
  show = ()=>{
      this.state.cars.forEach(element => {
          console.log(element.toUpperCase()+'*')
      });
  }
  render() {
    return <div>
        {this.show()}
    </div>;
  }
}
