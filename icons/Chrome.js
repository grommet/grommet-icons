"use strict";

exports.__esModule = true;
exports.Chrome = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Chrome = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Chrome"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4285F4",
    d: "M11.973 16.414A4.32 4.32 0 0 1 7.66 12.1a4.32 4.32 0 0 1 4.314-4.315 4.32 4.32 0 0 1 4.315 4.315 4.32 4.32 0 0 1-4.315 4.314z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4AAE48",
    d: "M13.791 17.181a5.507 5.507 0 0 1-5.38-.926 5.496 5.496 0 0 1-1.718-2.505l-.002-.006L1.936 5.51A11.892 11.892 0 0 0 .23 14.35a11.896 11.896 0 0 0 5.08 7.627 11.894 11.894 0 0 0 4.557 1.84l3.924-6.635z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#EA3939",
    d: "M22.76 6.707a12.08 12.08 0 0 0-20.185-2.25l4.016 6.956a5.393 5.393 0 0 1 5.274-4.706H22.76z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FED14B",
    d: "M11.926 24c3.01 0 5.891-1.129 8.11-3.178a11.932 11.932 0 0 0 3.816-7.893 12.05 12.05 0 0 0-.744-5.144h-7.856a5.506 5.506 0 0 1 2.09 4.34 5.529 5.529 0 0 1-1.182 3.381l-5.008 8.47c.258.016.518.024.774.024z"
  })));
});
exports.Chrome = Chrome;
Chrome.displayName = 'Chrome';