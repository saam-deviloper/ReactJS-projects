import React, { useEffect, useReducer } from "react";
import axios from "axios";
//with axios we get data into useEffect and control the req with useReducer

const initialState = {
  isLoading: true,
  isError: "",
  posts: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Passed":
      return {
        isLoading: false,
        posts: action.payload,
        isError: "",
      };
    case "Failed":
      return {
        isLoading: false,
        posts: {},
        isError: action.errr,
      };
    default:
      return state;
  }
};
export default function ApiReducer() {
  const [data, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resp) => dispatch({ type: "Passed", payload: resp.data }))
      .catch((err) => dispatch({ type: "Failed", errr: err }));
  }, []);

  return (
    <>
      {data.isError && data.isError}
      {data.isLoading ? <h1>Loading</h1> : data.posts.body}
    </>
  );
}
