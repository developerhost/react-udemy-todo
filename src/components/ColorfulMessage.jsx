import React from "react";

const ColorfulMessage = (props) => {
  const { color, message } = props;
  console.log(props);

  const contentStyle = {
    color: color,
    fontSize: "18px"
  };
  return <p style={contentStyle}>{message}</p>;
};

export default ColorfulMessage;
