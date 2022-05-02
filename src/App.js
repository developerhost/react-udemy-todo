import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [displayFlag, setDisplayFlag] = useState(false);
  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchDisplayFlag = () => {
    setDisplayFlag(!displayFlag);
  };

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        displayFlag || setDisplayFlag(true);
      } else {
        displayFlag || setDisplayFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="pink" message="change" />
      <button onClick={onClickCountUp}>countUp</button>
      <button onClick={onClickSwitchDisplayFlag}>on/off</button>
      <p>{num}</p>
      {displayFlag && <p>display</p>}
    </>
  );
};

export default App;
