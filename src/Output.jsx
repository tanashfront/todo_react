import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { WordsContext } from "./App";
import WordsTable from "./WordsTable";

const Output = () => {
  const { words } = useContext(WordsContext);
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Entry</th>
            <th scope="col">Update Text</th>
            <th scope="col">Update Button</th>
          </tr>
        </thead>

        <tbody>
          <> 
            {words.map((word) => (
              <tr key={word.id}>
                <WordsTable id={word.id} value={word.value} />
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default Output;
