"use strict";

exports.__esModule = true;
exports.StatusCriticalSmall = void 0;

var _react = _interopRequireDefault(require("react"));

var _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var StatusCriticalSmall = function StatusCriticalSmall(props) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    viewBox: "0 0 12 12",
    a11yTitle: "StatusCriticalSmall"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    stroke: "#000",
    d: "M6.71239638,1.26313029 C6.31895072,0.869684641 5.68347072,0.867263198 5.28760362,1.26313029 L1.26313029,5.28760362 C0.869684641,5.68104928 0.867263198,6.31652928 1.26313029,6.71239638 L5.28760362,10.7368697 C5.68104928,11.1303154 6.31652928,11.1327368 6.71239638,10.7368697 L10.7368697,6.71239638 C11.1303154,6.31895072 11.1327368,5.68347072 10.7368697,5.28760362 L6.71239638,1.26313029 Z"
  }));
};

exports.StatusCriticalSmall = StatusCriticalSmall;