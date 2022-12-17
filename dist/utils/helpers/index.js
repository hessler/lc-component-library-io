"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _titleCase = require("./titleCase");
Object.keys(_titleCase).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _titleCase[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _titleCase[key];
    }
  });
});