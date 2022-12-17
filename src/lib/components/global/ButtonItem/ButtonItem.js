/**
 * @module ButtonItem
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './ButtonItem.scss';

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
  large: 'large',
  medium: 'medium',
  small: 'small',
};

const ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
};

/**
 * Represents a reusable, flexible, customizable Button item.
 *
 * @param {object} props - The component props object.
 * @param {React.ReactElement} props.children - The children elements to render as content for the button element.
 * @param {ButtonSizes} [props.size] - The size value of the button (Default: 'medium').
 * @param {ButtonVariants} [props.variant] - The variant of the button (Default: 'primary').
 *
 * @returns {React.ReactElement} The ButtonItem component.
 */
function ButtonItem({ children, size, variant, ...passThroughProps }) {
  const variantClass = variant ? `btn-${variant}` : '';
  const sizeClass = size ? `size-${size}` : 'size-medium';
  const btnClasses = String(`btn ${variantClass} ${sizeClass}`)
    .replace(/\s+/g, ' ')
    .trim();
  const propsClassName = passThroughProps?.className
    ? passThroughProps.className
    : '';

  // Default type is button, but if `type` is specified in `...passThroughProps`
  // it will be overridden.
  const finalAttrs = {
    type: 'button',
    ...passThroughProps,
    className: [btnClasses, propsClassName].join(' '),
  };
  return <button {...finalAttrs}>{children}</button>;
}

export { ButtonItem, ButtonSizes, ButtonVariants };
