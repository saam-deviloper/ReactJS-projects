import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: left;
  margin: 20px 50px;
  z-index: 15;
  li {
    padding: 18px 30px;
    color: black;
  }
  @media (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
    background-color: dodgerblue;
    position: fixed;
    transform: ${(props) =>
      props.open ? " translateX(0)" : "translateX(100%)"};
    transition: all 0.3s linear;
    top: 0;
    right: 0;
    width: 45%;
    height: 100vh;
    padding-top: 3.5rem;
    li {
      color: white;
    }
  }
`;

export default function ({ open }) {
  return (
    <>
      <Ul open={open}>
        <li>Home</li>
        <li>Blog</li>
        <li>Contact</li>
      </Ul>
    </>
  );
}
