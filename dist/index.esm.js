import React from 'react';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

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
function ButtonItem(_ref) {
  var attributes = _ref.attributes,
    size = _ref.size,
    text = _ref.text,
    variant = _ref.variant;
  var finalAttrs = _objectSpread2(_objectSpread2({}, attributes), {}, {
    class: "btn btn-".concat(variant, " size-").concat(size)
  });
  return /*#__PURE__*/React.createElement("button", finalAttrs, text);
}

export { ButtonItem };
