import React, { Component } from "react";

const withCounter = (OldComponent) => {
  class NewComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        number: 0,
      };
    }
    jam = () => {
      this.setState((prevState) => ({
        number: prevState.number + 1,
      }));
    };
    render() {
      return <OldComponent number={this.state.number} jamFunc={this.jam} {...this.props}/>;
    }
  }
  return NewComponent;
};
export default withCounter;
