"use strict";

exports.__esModule = true;
exports.Slack = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Slack = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Slack"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#E01E5A",
    d: "M5.048 15.124a2.512 2.512 0 0 1-2.515 2.514A2.512 2.512 0 0 1 .02 15.124a2.512 2.512 0 0 1 2.514-2.514h2.515v2.514zm1.257 0a2.512 2.512 0 0 1 2.514-2.514 2.512 2.512 0 0 1 2.514 2.514v6.286a2.512 2.512 0 0 1-2.514 2.514 2.512 2.512 0 0 1-2.514-2.514v-6.286z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#36C5F0",
    d: "M8.819 5.029a2.512 2.512 0 0 1-2.514-2.515A2.512 2.512 0 0 1 8.819 0a2.512 2.512 0 0 1 2.514 2.514V5.03H8.82zm0 1.276a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514H2.514A2.512 2.512 0 0 1 0 8.82a2.512 2.512 0 0 1 2.514-2.514H8.82z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#2EB67D",
    d: "M18.895 8.819a2.512 2.512 0 0 1 2.515-2.514 2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514h-2.515V8.82zm-1.257 0a2.512 2.512 0 0 1-2.514 2.514 2.512 2.512 0 0 1-2.515-2.514V2.514A2.512 2.512 0 0 1 15.124 0a2.512 2.512 0 0 1 2.514 2.514V8.82z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#ECB22E",
    d: "M15.124 18.895a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.515 2.512 2.512 0 0 1-2.514-2.515v-2.514h2.514zm0-1.257a2.512 2.512 0 0 1-2.514-2.514 2.512 2.512 0 0 1 2.514-2.514h6.305a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514h-6.305z"
  })));
});
exports.Slack = Slack;
Slack.displayName = 'Slack';