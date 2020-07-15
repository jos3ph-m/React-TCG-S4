import React from "react";

const validation = (props) => {
  const { inputLength } = props;

  let validationMessage = "Text is long enough";

  if (inputLength <= 5) {
    validationMessage = "Text is too short";
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
