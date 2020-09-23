"use strict";

exports.__esModule = true;
exports.Unsorted = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Unsorted = function Unsorted(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Unsorted"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.2044 15.3211L16.8012 13.7243L17.5083 14.4314L15.058 16.8817L14.7044 17.2353L14.3509 16.8817L11.9006 14.4314L12.6077 13.7243L14.2044 15.3211V7.21705H15.2044V15.3211ZM9.30385 8.91421V17.0182H10.3038V8.91421L11.9006 10.511L12.6077 9.80385L10.1574 7.35355L9.80385 7L9.45029 7.35355L6.99999 9.80385L7.7071 10.511L9.30385 8.91421Z",
    fill: "#000"
  }));
};

exports.Unsorted = Unsorted;