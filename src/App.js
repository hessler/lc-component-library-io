import React from "react";
import {
  ButtonItem,
  ButtonSizes,
  ButtonVariants,
} from "./lib/ButtonItem/ButtonItem";

function App() {
  return (
    <ButtonItem
      attributes={{ type: "button " }}
      text="Primary Button"
      size={ButtonSizes.medium}
      variant={ButtonVariants.primary}
    />
  );
}

export default App;
