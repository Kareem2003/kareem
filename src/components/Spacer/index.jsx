import { space } from "postcss/lib/list";
import React from "react";

const Spacer = ({ space }) => {
  return <div className={`${space}`}></div>;
};

export default Spacer;
