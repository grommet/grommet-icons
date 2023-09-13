"use strict";

exports.__esModule = true;
exports.GooglePlay = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var GooglePlay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePlay"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#EA4335",
    d: "M11.128 12.003 1.09 22.011a2.73 2.73 0 0 0 3.999 1.62l11.29-6.377-5.251-5.25Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FBBC04",
    d: "m21.338 9.67-4.899-2.806-5.311 5.14 5.251 5.25 4.944-2.865a2.663 2.663 0 0 0 0-4.719h.015Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#4285F4",
    d: "M1.09 1.995c-.06.225-.091.457-.09.69V21.32c0 .233.03.465.09.69l10.038-10.007L1.09 1.995Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#34A853",
    d: "m11.128 12.003 5.311-5.139L5.126.383A2.79 2.79 0 0 0 3.723 0 2.73 2.73 0 0 0 1.09 1.988l10.038 10.015Z"
  }));
});
exports.GooglePlay = GooglePlay;
GooglePlay.displayName = 'GooglePlay';