"use strict";

exports.__esModule = true;
exports.Tumblr = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Tumblr = function Tumblr(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Tumblr"
  }, props), _react.default.createElement("path", {
    fill: "#35465C",
    fillRule: "evenodd",
    d: "M17.6389798,19.1699694 C17.1927306,19.3822191 16.3392319,19.5682188 15.7024829,19.5847188 C13.781736,19.6357187 13.4089866,18.2354709 13.3924866,17.2184725 L13.3924866,9.74773446 L18.2119789,9.74773446 L18.2119789,6.11399025 L13.4104866,6.11399025 L13.4104866,0 L9.8944922,0 C9.83674229,0 9.73624245,0.0509999187 9.72199247,0.179999713 C9.5164928,2.05124673 8.6404942,5.33474149 5,6.6472394 L5,9.74773446 L7.42849613,9.74773446 L7.42849613,17.588972 C7.42849613,20.2739677 9.40924297,24.0877116 14.6374846,23.9984617 C16.4014818,23.9677118 18.3597287,23.229713 18.793228,22.592964 L17.6389798,19.1699694 Z"
  }));
};

exports.Tumblr = Tumblr;