"use strict";

exports.__esModule = true;
exports.Link = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Link = function Link(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Link"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M16.125 2.42a2.009 2.009 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839l-3.705 3.705a2.009 2.009 0 0 1-2.84.001L12.42 8.964a2 2 0 0 1 .001-2.839l3.705-3.705zm-10 10a2.009 2.009 0 0 1 2.84-.001l2.616 2.617a2 2 0 0 1-.001 2.839L7.875 21.58a2.009 2.009 0 0 1-2.84.001L2.42 18.964a2 2 0 0 1 .001-2.839l3.705-3.705zM7 17 17 7"
  }));
};

exports.Link = Link;