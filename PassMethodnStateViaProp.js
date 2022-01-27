import React, { Component } from "react";

export default class PassMethodnStateViaProp extends Component {
  constructor() {
    super();
  }
  render() {
    const { sayHi } = this.props;
    return <div>{console.log('get something from method n state')}{sayHi}</div>;
  }
}
