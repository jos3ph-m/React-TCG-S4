import React from "react";
import "./Char.css";

const char = (props) => {
  const { character, clicked } = props;
  return (
    <div className="char" onClick={clicked}>
      {props.character}
    </div>
  );
};

export default char;
