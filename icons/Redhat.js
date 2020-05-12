"use strict";

exports.__esModule = true;
exports.Redhat = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Redhat = function Redhat(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Redhat"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(0 3)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#E00",
    d: "M5.83245745,3.12541039 C6.47698077,0.721248552 7.36320033,-0.240416184 8.49111613,0.240416184 C10.1829898,0.961664736 10.9080786,0.721248552 11.6331673,0.240416184 C12.1165598,-0.080138728 12.8416485,-0.080138728 13.8084335,0.240416184 L17.1921809,1.68291329 C18.1589659,2.0034682 18.8034892,3.12541039 19.1257509,5.04873986 C19.4480125,6.97206934 19.6897088,8.25428898 19.8508396,8.89539881 C22.267802,9.85706354 23.6374141,11.2995606 23.9596758,13.2228901 C24.4430682,16.1078843 20.5759283,18.9928785 12.5999523,17.5503814 C4.62397623,16.1078843 -0.451644897,11.5399768 0.0317475914,8.89539881 C0.35400925,7.13234679 1.88475213,6.25082078 4.62397623,6.25082078 L5.83245745,3.12541039 Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M4.88723097,5.53846154 C6.34892389,8.04517453 9.02869424,9.61187015 12.926542,10.2385484 C16.8243898,10.8652266 19.0981343,10.2385484 19.7477756,8.35851365 C20.0254081,9.7752343 20.0254081,10.7152517 19.7477756,11.1785658 C18.8331342,12.7049226 16.3357442,13.1465566 13.6573885,12.8235962 C9.7595407,12.3535875 6.91736002,11.100231 5.13084646,9.06352668 C4.64361549,8.43684843 4.4,7.88850497 4.4,7.41849628 C4.4,6.9484876 4.56241032,6.32180935 4.88723097,5.53846154 Z"
  })));
};

exports.Redhat = Redhat;