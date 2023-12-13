"use strict";

exports.__esModule = true;
exports.GooglePay = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
var _utils = require("../utils");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var GooglePay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var prefix = (0, _utils.generatePrefix)('GooglePay');
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "GooglePay"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#EB4434",
    d: "m12.645 14.34 5.937-10.285 3.234 1.867a4.366 4.366 0 0 1 1.598 5.964l-3.344 5.791a2.732 2.732 0 0 1-3.728 1l-3.002-1.732a1.909 1.909 0 0 1-.695-2.606Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FDBD00",
    d: "M12.012 7.2 4.625 19.991l3.235 1.867a4.367 4.367 0 0 0 5.964-1.598l4.791-8.298a2.729 2.729 0 0 0-1-3.729l-3.002-1.732a1.903 1.903 0 0 0-2.601.697Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#2DA94F",
    d: "m18.582 4.053-2.29-1.32A5.456 5.456 0 0 0 8.839 4.73l-4.246 7.352a2.729 2.729 0 0 0 1 3.728l2.289 1.32a2.729 2.729 0 0 0 3.728-1l5.069-8.779a3.81 3.81 0 0 1 5.206-1.394l-3.302-1.904Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#2B7AF0",
    d: "M9.496 6.885 6.971 5.43a2.357 2.357 0 0 0-3.215.86L.725 11.524a5.383 5.383 0 0 0 1.977 7.363l1.923 1.108 2.332 1.343 1.012.582a4.138 4.138 0 0 1-1.27-5.51l.786-1.355 2.872-4.964a2.343 2.343 0 0 0-.86-3.207Z"
  })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
exports.GooglePay = GooglePay;
GooglePay.displayName = 'GooglePay';