import React, { useReducer } from "react";

const initialState = 0;
const action = (state, action) => {
  switch (action.type) {
    case "Up":
      return state + action.numb;
      break;
    case "Down":
      return state - action.numb;
      break;
    case "Res":
      return initialState;
      break;

    default:
      return state;
  }
};

export default function Reducer() {
  const [num, dispatch] = useReducer(action, initialState);
  const [num2, dispatch2] = useReducer(action, initialState);

  return (
    <>
      <p>ba yek useReducer 2 model dispatch ejra mishe</p>
      <div>
        <caption style={{ color: "red" }}>add/minus 1step</caption>

        <h2>{num}</h2>
        <button onClick={() => dispatch({ type: "Up", numb: 1 })}>Up</button>
        <button onClick={() => dispatch({ type: "Res" })}>Res</button>
        <button onClick={() => dispatch({ type: "Down", numb: 1 })}>
          Down
        </button>
      </div>
      <hr />
      <div>
        <caption style={{ color: "red" }}>add/minus 3step</caption>
        <h2>{num2}</h2>
        <button onClick={() => dispatch2({ type: "Up", numb: 3 })}>Up</button>
        <button onClick={() => dispatch2({ type: "Res" })}>Res</button>
        <button onClick={() => dispatch2({ type: "Down", numb: 3 })}>
          Down
        </button>
      </div>
    </>
  );
}
