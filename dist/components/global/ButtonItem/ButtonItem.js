"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ButtonItem = ButtonItem;
exports.ButtonVariants = exports.ButtonSizes = void 0;
var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread2"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
require("./ButtonItem.scss");
var _excluded = ["children", "size", "variant"];
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
exports.ButtonSizes = ButtonSizes;
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
exports.ButtonVariants = ButtonVariants;
function ButtonItem(_ref) {
  var children = _ref.children,
    size = _ref.size,
    variant = _ref.variant,
    passThroughProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  var variantClass = variant ? "btn-".concat(variant) : '';
  var sizeClass = size ? "size-".concat(size) : 'size-medium';
  var btnClasses = String("btn ".concat(variantClass, " ").concat(sizeClass)).replace(/\s+/g, ' ').trim();
  var propsClassName = passThroughProps !== null && passThroughProps !== void 0 && passThroughProps.className ? passThroughProps.className : '';

  // Default type is button, but if `type` is specified in `...passThroughProps`
  // it will be overridden.
  var finalAttrs = (0, _objectSpread2["default"])((0, _objectSpread2["default"])({
    type: 'button'
  }, passThroughProps), {}, {
    className: [btnClasses, propsClassName].join(' ')
  });
  return /*#__PURE__*/_react["default"].createElement("button", finalAttrs, children);
}