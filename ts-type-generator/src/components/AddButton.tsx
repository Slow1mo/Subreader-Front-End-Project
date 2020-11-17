import React from "react";
import { Type } from "typescript";

const AddButton = (props) => {
  let { type } = props;
  if (type === 'Object') {
    return <button>+</button>;
  } else {
    return ;
  }
};
export default AddButton;