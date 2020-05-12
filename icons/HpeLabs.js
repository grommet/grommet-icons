"use strict";

exports.__esModule = true;
exports.HpeLabs = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var HpeLabs = function HpeLabs(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "HpeLabs"
  }, props), /*#__PURE__*/_react["default"].createElement("polyline", {
    fill: "none",
    stroke: "#01A982",
    strokeWidth: "2",
    points: "14 23 5 23 5 2 17 2 17 15 13 15 13 6 9 6 9 19 20 19"
  }));
};

exports.HpeLabs = HpeLabs;