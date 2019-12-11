import React from "react";
import "./App.css";
import { TableComponent } from "./components/TableComponent";

function App() {
  return (
    <div
      className="App"
      style={{
        width: "50vw",
        position: "absolute",
        left: "50%",
        transform: "translate(-50%)",
      }}
    >
      <TableComponent />
    </div>
  );
}

export default App;
