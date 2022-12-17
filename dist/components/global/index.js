"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _ButtonItem = require("./ButtonItem/ButtonItem");
Object.keys(_ButtonItem).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _ButtonItem[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ButtonItem[key];
    }
  });
});
var _TemplateComponent = require("./TemplateComponent/TemplateComponent");
Object.keys(_TemplateComponent).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _TemplateComponent[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _TemplateComponent[key];
    }
  });
});