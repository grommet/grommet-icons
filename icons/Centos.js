"use strict";

exports.__esModule = true;
exports.Centos = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Centos = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Centos"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#7E2F76",
    fillRule: "evenodd",
    d: "M5.161 6.25 3.249 8.164V3.227h4.935L6.24 5.172l-.147.146.147.147 4.514 4.516v.738h-.83L5.457 6.251l-.15-.15-.146.15zm5.594 3.142V3.227H8.772l-2.09 2.091 4.073 4.074zM5.307 6.693 3.25 8.753v1.966h6.083L5.307 6.693zm7.964 2.67 4.044-4.045-2.119-2.12h-1.925v6.165zm4.636-4.045-.15.147-4.486 4.49v.764h.786l4.477-4.478.146-.146.15.146 1.96 1.96V3.2h-5.005l1.973 1.973.15.146zm-6.736-2.51v7l.828.828.856-.856V2.782h1.924L12 0 9.192 2.807h1.98zm3.478 7.911h6.141V8.794l-2.11-2.11-4.031 4.035zm-4.025 1.292-.872-.872h-6.92V9.17L0 12.002l2.832 2.832V12.81h6.993l.8-.799zm2.647 2.68v6.056h1.964l2.045-2.046-4.009-4.01zM5.317 17.32l4.092-4.093h-6.16v2.024l2.068 2.069zm13.364 0 2.11-2.11v-1.983h-6.2l4.09 4.093zm2.529-2.53 2.787-2.788-2.787-2.788v1.925h-6.98l-.863.863.808.808h7.035v1.98zm-2.53 3.118-.146-.146L14 13.227h-.729v.875l4.452 4.452.146.147-.146.15-1.897 1.896h4.964v-4.945l-1.96 1.96-.15.146zm-5.825 3.256v-6.89l-.872-.872-.799.799v6.963h-2.04L11.984 24l2.835-2.836h-1.964zm-6.762-2.463.147-.147 4.527-4.528v-.8h-.77l-4.534 4.536-.146.146-.147-.146-1.92-1.922v4.907h4.887L6.24 18.85l-.147-.15zm4.674-4.083L6.682 18.7l2.046 2.046h2.04v-6.13z"
  }));
});
exports.Centos = Centos;
Centos.displayName = 'Centos';