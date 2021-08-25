"use strict";

exports.__esModule = true;
exports.Reactjs = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Reactjs = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Reactjs"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "#00D8FF",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "11.996",
    cy: "11.653",
    r: "2.142"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "nonzero",
    d: "M11.996 7.81c2.768 0 5.397.39 7.396 1.078 2.22.764 3.575 1.894 3.575 2.765 0 .927-1.463 2.131-3.838 2.918-1.89.626-4.42.968-7.133.968-2.85 0-5.409-.335-7.277-.974-1.17-.4-2.136-.92-2.799-1.486-.595-.51-.895-1.016-.895-1.426 0-.874 1.302-1.988 3.475-2.746 2-.697 4.693-1.098 7.496-1.098m0-1.025c-2.912 0-5.718.418-7.834 1.156C1.622 8.825 0 10.213 0 11.653c0 1.486 1.741 2.978 4.387 3.882 1.989.68 4.654 1.029 7.609 1.029 2.816 0 5.451-.356 7.456-1.02 2.75-.912 4.54-2.385 4.54-3.891 0-1.445-1.675-2.842-4.266-3.735-2.113-.727-4.854-1.134-7.73-1.134m-3.348 2.96c1.383-2.399 3.034-4.481 4.63-5.87 1.77-1.54 3.426-2.15 4.18-1.714.803.463 1.116 2.331.611 4.782-.402 1.95-1.37 4.312-2.725 6.663-1.424 2.469-2.992 4.518-4.48 5.817-.93.814-1.863 1.391-2.685 1.682-.738.26-1.327.268-1.682.063-.757-.436-1.072-2.121-.643-4.381.395-2.081 1.394-4.615 2.794-7.043m-.888-.512c-1.455 2.522-2.495 5.162-2.913 7.363-.501 2.643-.11 4.742 1.137 5.46 1.289.744 3.45-.02 5.555-1.86 1.583-1.383 3.217-3.518 4.693-6.077 1.406-2.44 2.415-4.9 2.84-6.969.585-2.837.203-5.124-1.102-5.876-1.252-.722-3.298.03-5.366 1.83C10.92 4.568 9.197 6.74 7.76 9.231m.891 4.378C7.264 11.215 6.285 8.744 5.879 6.67c-.451-2.305-.152-4.043.602-4.479.802-.465 2.577.198 4.448 1.859 1.49 1.322 3.052 3.34 4.411 5.689 1.429 2.467 2.42 4.848 2.804 6.785.24 1.213.274 2.31.115 3.167-.143.77-.43 1.284-.785 1.49-.756.437-2.373-.132-4.117-1.633-1.605-1.38-3.302-3.511-4.706-5.937m-.887.514c1.459 2.52 3.226 4.74 4.925 6.2 2.039 1.755 4.052 2.463 5.298 1.742 1.287-.745 1.705-2.999 1.162-5.742-.408-2.061-1.441-4.543-2.922-7.1-1.41-2.437-3.039-4.54-4.618-5.942C9.443 1.36 7.271.548 5.967 1.303c-1.25.724-1.62 2.873-1.094 5.563.429 2.193 1.45 4.769 2.891 7.258"
  })));
});
exports.Reactjs = Reactjs;
Reactjs.displayName = 'Reactjs';