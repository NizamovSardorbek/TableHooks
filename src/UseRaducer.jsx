import React, { useReducer, useState } from "react";
import { Block } from "./UseRaducerStyle";
import Reducer from "./Raduce";
const UseRaducer = () => {
  const [state, dispatch] = useReducer(Reducer, []);

  const [inputValue, setInputValue] = useState("");
  const addProperty = () => {
    dispatch({
      type: "add",
      payload: inputValue,
    });
  };
  return (
    <Block>
      <div>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={() => addProperty()}>add property</button>
      </div>
      <div>
        {state.map((value, id) => (
          <div key={id}>
            <h2>
              {value.title}
              <button
                onClick={() => dispatch({ type: "remove", payload: value.id })}
              >
                delete
              </button>
            </h2>
          </div>
        ))}
      </div>
    </Block>
  );
};

export default UseRaducer;
