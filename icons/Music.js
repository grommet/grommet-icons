"use strict";

exports.__esModule = true;
exports.Music = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Music = function Music(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Music"
  }, props), _react.default.createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M1,17.9979131 C1,16.8944962 1.88670635,16 2.99810135,16 L9,16 L9,20.0020869 C9,21.1055038 8.11329365,22 7.00189865,22 L2.99810135,22 C1.89458045,22 1,21.1017394 1,20.0020869 L1,17.9979131 Z M15,17.9979131 C15,16.8944962 15.8867064,16 16.9981014,16 L23,16 L23,20.0020869 C23,21.1055038 22.1132936,22 21.0018986,22 L16.9981014,22 C15.8945804,22 15,21.1017394 15,20.0020869 L15,17.9979131 Z M9,16 L9,2 L23,2 L23,15.5 M9,6 L23,6"
  }));
};

exports.Music = Music;