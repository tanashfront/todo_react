import React, { useContext, useRef } from "react";
import { WordsContext } from "./App";

const WordsTable = ({ id, value }) => {
  const { words, dispatch } = useContext(WordsContext);
  console.log("words from WordsTable:", words);

  const updateRef = useRef();

  return (
    <>
      <th
         scope="row"
      >
        {id.split("-")[0]}
      </th>
      <td onClick={() => dispatch({ type: "delete", payload: { id: id } })}>
        {value}
      </td>
      <td>
        <input type="text" placeholder={value} ref={updateRef} />
      </td>
      <td>
      <button className="btn btn-dark" onClick={() =>
          dispatch({
            type: "update",
            payload: { id: id, value: updateRef.current.value },
          })
        }>Update</button>
      </td>
    </>
  );
};

export default WordsTable;
