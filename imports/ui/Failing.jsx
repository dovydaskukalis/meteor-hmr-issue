import React from "react";
import global from "./utils/global";

export const FailingComponent = () => {
  // Do something with global
  console.log(global.document);

  return <div>Failing component</div>;
};
