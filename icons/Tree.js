"use strict";

exports.__esModule = true;
exports.Tree = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tree = function Tree(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tree"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M4,1 L10,1 L10,7 L4,7 L4,1 Z M16,11 L20,11 L20,15 L16,15 L16,11 Z M16,19 L20,19 L20,23 L16,23 L16,19 Z M7,7 L7,21 L16,21 M7,13 L16,13"
  }));
};

exports.Tree = Tree;