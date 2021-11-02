import React, { lazy, Suspense } from "react";
import { Hello } from "./Hello.jsx";
import { Info } from "./Info.jsx";
import { FailingComponent } from "./Failing.jsx";

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    <FailingComponent />
    <Hello />
    <Info />
  </div>
);
