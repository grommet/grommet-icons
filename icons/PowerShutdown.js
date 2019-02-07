"use strict";

exports.__esModule = true;
exports.PowerShutdown = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var PowerShutdown = function PowerShutdown(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "PowerShutdown"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M12 1L12 9M6.99426725 4.51938959C6.50550683 4.84709741 6.05064133 5.22143661 5.63603897 5.63603897 4.00735931 7.26471863 3 9.51471863 3 12 3 16.9705627 7.02943725 21 12 21 16.9705627 21 21 16.9705627 21 12 21 9.51471863 19.9926407 7.26471863 18.363961 5.63603897 17.9493587 5.22143661 17.4944932 4.84709741 17.0057327 4.51938959"
  }));
};

exports.PowerShutdown = PowerShutdown;