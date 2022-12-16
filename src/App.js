/**
 * @module App
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {
  ButtonItem,
  ButtonSizes,
  ButtonVariants,
} from './lib/components/global/ButtonItem/ButtonItem';

/**
 * Represents the main App view.
 *
 * @returns {React.ReactElement} The main App component.
 */
function App() {
  return (
    <ButtonItem
      attributes={{ type: 'button ' }}
      size={ButtonSizes.medium}
      text="Primary Button"
      variant={ButtonVariants.primary}
    />
  );
}

export default App;
