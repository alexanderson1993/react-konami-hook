"use strict";
let { useState, useEffect } = require("react");

function useKonami(callback = () => {}) {
  const [keys, setKeys] = useState([]);

  // Completion handler
  useEffect(
    () => {
      if (keys.join("") === "uuddlrlrba") {
        callback();
        setKeys([]);
      }
    },
    [keys]
  );

  // Key handler event
  const downHandler = e => {
    let key = null;
    if (e.code === "ArrowUp") key = "u";
    if (e.code === "ArrowDown") key = "d";
    if (e.code === "ArrowLeft") key = "l";
    if (e.code === "ArrowRight") key = "r";
    if (e.code === "KeyA") key = "a";
    if (e.code === "KeyB") key = "b";

    if (key) {
      // Slice it down to the correct size
      setKeys(keyState =>
        keyState.length >= 10
          ? keyState.concat(key).slice(1, 11)
          : keyState.concat(key)
      );
    }
  };

  // Set up the key handler
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, []);
}

module.exports = useKonami;
