import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
var _excluded = ["children", "size", "variant"];
/**
 * @module ButtonItem
 */
// eslint-disable-next-line no-unused-vars
import React from 'react';
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

var ButtonSizes = {
  large: 'large',
  medium: 'medium',
  small: 'small'
};
var ButtonVariants = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary'
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
function ButtonItem(_ref) {
  var children = _ref.children,
    size = _ref.size,
    variant = _ref.variant,
    passThroughProps = _objectWithoutProperties(_ref, _excluded);
  var variantClass = variant ? "btn-".concat(variant) : null;
  var sizeClass = size ? "size-".concat(size) : 'size-medium';
  var btnClasses = "btn ".concat(variantClass, " ").concat(sizeClass);
  var propsClassName = (passThroughProps === null || passThroughProps === void 0 ? void 0 : passThroughProps.className) ? passThroughProps.className : '';

  // Default type is button, but if `type` is specified in `...passThroughProps`
  // it will be overridden.
  var finalAttrs = _objectSpread(_objectSpread({
    type: 'button'
  }, passThroughProps), {}, {
    className: [btnClasses, propsClassName].join(' ')
  });
  return /*#__PURE__*/React.createElement("button", finalAttrs, children);
}
export { ButtonItem, ButtonSizes, ButtonVariants };