"use strict";

exports.__esModule = true;

var _defaultProps = require("./default-props");

Object.keys(_defaultProps).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _defaultProps[key]) return;
  exports[key] = _defaultProps[key];
});

var _icons = require("./icons");

Object.keys(_icons).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _icons[key]) return;
  exports[key] = _icons[key];
});

var _themes = require("./themes");

Object.keys(_themes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _themes[key]) return;
  exports[key] = _themes[key];
});