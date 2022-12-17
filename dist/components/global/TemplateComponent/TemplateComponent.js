"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateComponent = TemplateComponent;
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
require("./TemplateComponent.scss");
var _excluded = ["children"];
/**
 * Represents a simple, placeholder, template component for reference, which outputs a simple <div> with the specified content.
 *
 * @param {object} props - The component props object.
 * @param {React.ReactElement} props.children - The children elements to render as content for the button element.
 *
 * @returns {React.ReactElement} The TemplateComponent component.
 */
function TemplateComponent(_ref) {
  var children = _ref.children,
    passThroughProps = (0, _objectWithoutProperties2["default"])(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", passThroughProps, children);
}