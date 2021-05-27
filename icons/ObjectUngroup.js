"use strict";

exports.__esModule = true;
exports.ObjectUngroup = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ObjectUngroup = function ObjectUngroup(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ObjectUngroup"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1 1h3v3H1V1zm12 0h3v3h-3V1zM4 2h9m2 7h5M4 15h9M1 13h3v3H1v-3zm12 0h3v3h-3v-3zM2 4v9m13-9v9m5-5h3v3h-3V8zm-9 14h9M8 20h3v3H8v-3zm12 0h3v3h-3v-3zM9 16v4m13-9v9"
  }));
};

exports.ObjectUngroup = ObjectUngroup;