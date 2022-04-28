import React from "react";
import { Inputs } from "./elements/Inputs";
import RadioButtons from "./elements/RadioButtons";
import Select from "./elements/Select";

const Elements = ({ fields: type }) => {
  switch (type) {
    case "text":
      return <Inputs />;
    case "select":
      return <Select/>;
    case "radio":
      return <RadioButtons />;
    default:
      break;
  }
  return <div>Elements</div>;
};

export default Elements;
