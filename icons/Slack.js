"use strict";

exports.__esModule = true;
exports.Slack = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Slack = exports.Slack = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
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
Slack.displayName = 'Slack';