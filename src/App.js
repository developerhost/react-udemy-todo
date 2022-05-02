import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      <h1 style={{ color: "red" }}>hello</h1>
      <ColorfulMessage color="pink" message="change" />
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};

export default App;
