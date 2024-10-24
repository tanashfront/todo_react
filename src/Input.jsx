import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { WordsContext } from "./App";

const Input = () => {
  const wordRef = useRef();

  const { dispatch } = useContext(WordsContext);
  //   console.log(words);

  return (
    <form>
      <div className="mb-3">
        <h1 className="fs-1">Type Below</h1>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          ref={wordRef}
        />
        <div id="emailHelp" className="form-text">
          Type carefully
        </div>
      </div>
      <div className="d-grid gap-2">
        <button
          className="btn btn-dark"
          type="button"
          onClick={() => (
            dispatch({
              type: "addition",
              payload: {
                id: uuidv4(),
                value: wordRef.current.value,
              },
            }),
            (wordRef.current.value = "")
          )}
        >
          Press
        </button>
      </div>
    </form>
  );
};

export default Input;
