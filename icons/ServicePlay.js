"use strict";

exports.__esModule = true;
exports.ServicePlay = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ServicePlay = function ServicePlay(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 24 24",
    a11yTitle: "ServicePlay"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M7,13 C10.3137085,13 13,10.3137085 13,7 C13,3.6862915 10.3137085,1 7,1 C3.6862915,1 1,3.6862915 1,7 C1,10.3137085 3.6862915,13 7,13 Z M14.995457,16.6569808 L14.995457,16.6569808 C15.6222982,16.8791083 16.2970312,17 17,17 C20.3137085,17 23,14.3137085 23,11 C23,7.6862915 20.3137085,5 17,5 C15.5133616,5 14.1530044,5.54067366 13.1048383,6.43611087 M4.82356548,12.6921643 C3.69893809,13.7826979 3,15.3097261 3,17 C3,20.3137085 5.6862915,23 9,23 L9,23 C12.3137085,23 15,20.3137085 15,17 C15,14.4351166 13.3906156,12.2461251 11.1265973,11.3877758 M6.5,6 L8,7 L6.5,8 L6.5,6 Z"
  }));
};

exports.ServicePlay = ServicePlay;