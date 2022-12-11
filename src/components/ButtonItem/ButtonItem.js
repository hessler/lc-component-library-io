/**
 * @module ButtonItem
 */
import React from "react";
import "./ButtonItem.scss";

/**
 * Represents a reusable, flexible, customizable Button item.
 *
 * @param {object} props - The component props object.
 * @param {string} [props.attributes] - The pass through HTML attributes passed to the <button> element.
 * @param {'small'|'medium'|'large'} [props.size] - The size value of the button (Default: 'medium').
 * @param {string} props.text - The text value to use in the button element.
 * @param {'primary'|'secondary'|'tertiary'} [props.variant] - The variant of the button (Default: 'primary').
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

export default ButtonItem;
