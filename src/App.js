import React, { Suspense } from "react";
import "./App.css";
import { createResource } from "./components/FetchApi";
import { Person } from "./components/Person";
import { Number } from "./components/Number";

const resource = createResource();

function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>...loading person</h1>}>
        <Person resource={resource} />
      </Suspense>
      <Suspense fallback={<h1>...loading number</h1>}>
        <Number resource={resource} />
      </Suspense>
    </div>
  );
}

export default App;
