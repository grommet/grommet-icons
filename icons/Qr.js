"use strict";

exports.__esModule = true;
exports.Qr = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Qr = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Qr"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M13 14h1v1h-1v-1zm1 1h1v1h-1v-1zm0 1h1v1h-1v-1zm2 0h1v1h-1v-1zm0 1h1v1h-1v-1zm-3-1h1v1h-1v-1zm2 0h1v1h-1v-1zm0 1h1v1h-1v-1zm3-1h1v1h-1v-1zm0-1h1v1h-1v-1zm1-1h1v1h-1v-1zm-2 2h1v1h-1v-1zm0 1h1v1h-1v-1zm-1 1h1v1h-1v-1zm-1 0h1v1h-1v-1zm2 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-2 1h1v1h-1v-1zm-2 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-2 0h1v1h-1v-1zm0 1h1v1h-1v-1zm1 1h1v1h-1v-1zm1 0h1v1h-1v-1zm2 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-1-2h1v1h-1v-1zm1 0h1v1h-1v-1zm1-1h1v1h-1v-1zm0-1h1v1h-1v-1zm0 3h1v1h-1v-1zm0-1h1v1h-1v-1zm1-1h1v1h-1v-1zm0-1h1v1h-1v-1zm1 3h1v1h-1v-1zm0-2h1v1h-1v-1zm0 1h1v1h-1v-1zm-2-3h1v1h-1v-1zm-6 1h1v1h-1v-1zm-1 0h1v1h-1v-1zm0 1h1v1h-1v-1zm2 0h1v1h-1v-1zm-3 0h1v1h-1v-1zm2 0h1v1h-1v-1zm-2 1h1v1h-1v-1zm0 1h1v1h-1v-1zm0-19h1v1h-1V1zm1 1h1v1h-1V2zm-1 2h1v1h-1V4zm1 1h1v1h-1V5zm-1 1h1v1h-1V6zm1 0h1v1h-1V6zm0 1h1v1h-1V7zm0 1h1v1h-1V8zm-1 1h1v1h-1V9zm1 0h1v1h-1V9zm-1 1h1v1h-1v-1zM1 11h1v1H1v-1zm1 1h1v1H2v-1zm2-1h1v1H4v-1zm0 1h1v1H4v-1zm1-1h1v1H5v-1zm1 1h1v1H6v-1zm1-1h1v1H7v-1zm1 1h1v1H8v-1zm0-1h1v1H8v-1zm1 0h1v1H9v-1zm1 0h1v1h-1v-1zm1 1h1v1h-1v-1zm2 0h1v1h-1v-1zm1-1h1v1h-1v-1zm1 0h1v1h-1v-1zm1 0h1v1h-1v-1zm-1 2h1v1h-1v-1zm-2 9h1v1h-1v-1zm-1 0h1v1h-1v-1zm0-9h1v1h-1v-1zm-1 0h1v1h-1v-1zm0 1h1v1h-1v-1zm0 1h1v1h-1v-1zm11-1h1v1h-1v-1zm-1 1h1v1h-1v-1zm1 2h1v1h-1v-1zm-5-4h1v1h-1v-1zm1-1h1v1h-1v-1zm4 0h1v1h-1v-1zm0 1h1v1h-1v-1zm-1 0h1v1h-1v-1zm1 8h1v1h-1v-1zm-1 1h1v1h-1v-1zm-2 0h1v1h-1v-1zm3 0h1v1h-1v-1z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    strokeWidth: "2",
    d: "M15 2h7v7h-7V2zM2 2h7v7H2V2zm0 13h7v7H2v-7zM18 5h1v1h-1V5zM5 5h1v1H5V5zm0 13h1v1H5v-1z"
  })));
});
exports.Qr = Qr;
Qr.displayName = 'Qr';