import React from "react";
import { render } from "react-dom";
import useKonami from "./";

function App() {
  useKonami(() => alert("Nice Job!"));
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <h1 style={{ fontFamily: "sans-serif" }}>Use the Konami Code</h1>
    </div>
  );
}

render(<App />, window.root);
