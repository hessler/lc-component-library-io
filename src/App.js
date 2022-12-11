import React from "react";
import { ButtonItem } from "./components/ButtonItem/ButtonItem";

function App() {
  return (
    <ButtonItem
      attributes={{ type: "button " }}
      text="Primary Button"
      size="medium"
      variant="Primary"
    />
  );
}

export default App;
