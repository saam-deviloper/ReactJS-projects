import React, { Component } from "react";
import axios from "axios";

export default class AxiosApi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      title: "",
      body: "",
    };
    this.p1 = React.createRef();

    this.p2 = React.createElement("p", "hello world", null);
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => this.setState({ data: resp }))
      .catch((err) => console.log(err));

    axios
      .patch("https://jsonplaceholder.typicode.com/posts/1", {
        title: "hessam",
        body: "mbmbmb",
      })
      .then((resp) => console.log(resp))
      .catch((err) => console.log(err));
    this.p1.current.innerText = "hello from ref";
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  SendPost = () => {
    const { title, body } = this.state;
    axios
      .post("https://jsonplaceholder.typicode.com/posts/", {
        title: title,
        body: body,
      })
      .then((resp) => console.log(resp));
  };
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <label>title</label>
        <input name="title" onChange={this.changeHandler} value={title} />
        <br />
        <label>body</label>
        <input name="body" onChange={this.changeHandler} value={body} />
        <br />
        <button onClick={this.SendPost}>sendAxios</button>
        <p ref={this.p1}></p>
        {React.createElement('a',null,'this tag created by React')}
      </div>
    );
  }
}
