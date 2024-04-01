import React from "react";
import "./App.css";
import { Application } from "./components/application/Application";
import { Greet } from "./components/greet/Greet";
import { Skills } from "./components/skills/skills";

function App() {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
  return (
    <div className="App">
      <Greet />
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
