import { createContext, useReducer } from "react";
import "./App.css";
import Input from "./Input";
import Output from "./Output";
// import { reducer } from "./Reducer.jsx";

function reducer(words, action) {
  switch (action.type) {
    case "addition":
      return [...words, { id: action.payload.id, value: action.payload.value }];
    case "delete":
      return words.slice().filter((word) => word.id != action.payload.id);
    case "update":
      return words.map((word) =>
        word.id == action.payload.id
          ? { id: word.id, value: action.payload.value }
          : word
      );
    default:
      return [...words];
  }
}

export const WordsContext = createContext();

const App = ({ initState = [] }) => {
  const [words, dispatch] = useReducer(reducer, initState);

  return (
    <WordsContext.Provider value={{ words, dispatch }}>
      <div className="row">
        <div className="col-sm-5">
          <div className="card">
            <div className="card-body">
              <Input />
            </div>
          </div>
        </div>
        <div className="col-sm-7">
          <div className="card">
            <div className="card-body">
              {words.length > 0 ? <Output/> : <h2 className="fs-1">You'll see your words here...</h2>}
              {/* <Output /> */}
            </div>
          </div>
        </div>
      </div>
    </WordsContext.Provider>
  );
};

export default App;
