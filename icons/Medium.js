"use strict";

exports.__esModule = true;
exports.Medium = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Medium = function Medium(props) {
  return _react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "Medium"
  }, props), _react["default"].createElement("path", {
    fill: "#444",
    d: "M2.84593838,5.88685595 C2.87575654,5.59224254 2.76340763,5.30104995 2.54341737,5.10276397 L0.302521008,2.4032473 L0.302521008,2 L7.2605042,2 L12.6386555,13.7949836 L17.3669469,2 L24,2 L24,2.4032473 L22.0840336,4.2402628 C21.9188563,4.36617057 21.8369199,4.57310892 21.8711485,4.77792587 L21.8711485,18.2755093 C21.8369199,18.4803262 21.9188563,18.6872645 22.0840336,18.8131723 L23.9551821,20.6501878 L23.9551821,21.0534351 L14.5434174,21.0534351 L14.5434174,20.6501878 L16.4817928,18.7683671 C16.6722689,18.5779447 16.6722689,18.5219382 16.6722689,18.2307041 L16.6722689,7.32062416 L11.2829132,21.0086299 L10.5546219,21.0086299 L4.28011204,7.32062416 L4.28011204,16.4945003 C4.22779746,16.8801958 4.35589372,17.2685069 4.62745097,17.5474239 L7.14845938,20.6053826 L7.14845938,21.0086299 L0,21.0086299 L0,20.6053826 L2.5210084,17.5474239 C2.79058848,17.2680445 2.91121535,16.8771576 2.84593838,16.4945003 L2.84593838,5.88685595 Z"
  }));
};

exports.Medium = Medium;