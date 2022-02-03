import React, { Component } from "react";
import { keyframes } from "styled-components";

export default class FetchApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postsData: [],
    };
  }
  getData = () => {
    let data = {};
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((response) => response.json())
      .then((json) => this.setState({ postsData: json }));
  };
  componentDidMount() {
    this.getData();
  }
  sendPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: "hesam sends data to server",
        body: "sends/post data to server via fetch mehtod",
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  render() {
    return (
      <>
        <div style={{ color: "blue", marginLeft: "30px" }}>
          <button onClick={this.sendPosts}>sendData</button>
          <h3>POSTS:</h3>
          {this.state.postsData.map((post) => (
            <p key={post.id}>{`${post.id}. ${post.title}`}</p>
          ))}
        </div>
      </>
    );
  }
}
