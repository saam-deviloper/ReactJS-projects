import React, { Component } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Pee = styled.p`
  @media (min-width: 771px) {
    display: block;
    font-size: 24px;
    margin-left: 40px;
    &:hover{
        color:red;
    }
  }
  @media (max-width: 771px) {
    display: none;
  }
`;

const DIV = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 30px;
  z-index: 20;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
  div {
    width: 2rem;
    height: 0.3rem;
    background-color: ${(props) => (props.open ? "white" : "dodgerblue")};
    border-radius: 10px;
    z-index: 22;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      translate: ${(props) =>
        props.open ? "translate(-100%)" : "translate(0)"};
      opacity: ${(props) => (props.open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default class Hamburger extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  clickHandler = () => {
    this.setState({
      open: !this.state.open,
    });
  };
  render() {
    return (
      <>
        <DIV open={this.state.open} onClick={this.clickHandler}>
          <div></div>
          <div></div>
          <div></div>
        </DIV>
        <Navbar open={this.state.open} />
        <Pee>Reduce screen width to 768 then hambergur shows up</Pee>
      </>
    );
  }
}
