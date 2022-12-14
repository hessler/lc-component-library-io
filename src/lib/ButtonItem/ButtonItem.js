/**
 * @module ButtonItem
 */
import React from "react";
import "./ButtonItem.scss";

/**
 * @typedef ButtonSizes
 * @param {string} large - Large size.
 * @param {string} medium - Medium size.
 * @param {string} small - Small size.
 */

/**
 * @typedef ButtonVariants
 * @param {string} primary - Primary style.
 * @param {string} secondary - Secondary style.
 * @param {string} tertiary - Tertiary style.
 */

const ButtonSizes = {
  large: "large",
  medium: "medium",
  small: "small",
};

const ButtonVariants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
};

/**
 * Represents a reusable, flexible, customizable Button item.
 *
 * @param {object} props - The component props object.
 * @param {string} [props.attributes] - The pass through HTML attributes passed to the <button> element.
 * @param {ButtonSizes} [props.size] - The size value of the button (Default: 'medium').
 * @param {string} props.text - The text value to use in the button element.
 * @param {ButtonVariants} [props.variant] - The variant of the button (Default: 'primary').
 *
 * @returns {React.ReactElement} The ButtonItem component.
 */
function ButtonItem({ attributes, size, text, variant }) {
  const finalAttrs = {
    ...attributes,
    class: `btn btn-${variant} size-${size}`,
  };
  return <button {...finalAttrs}>{text}</button>;
}

export { ButtonItem, ButtonSizes, ButtonVariants };
