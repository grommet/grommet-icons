"use strict";

exports.__esModule = true;
exports.Figma = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Figma = exports.Figma = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Figma"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8C13.7909 8 12 9.79086 12 12C12 14.2091 13.7909 16 16 16Z",
    fill: "#19BCFE"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 24C10.2091 24 12 22.2091 12 20C12 19.3969 12 18.0636 12 16C10.203 16 8.86971 16 8 16C5.79086 16 4 17.7909 4 20C4 22.2091 5.79086 24 8 24Z",
    fill: "#09CF83"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 16C8.73638 16 10.0697 16 12 16V8C10.0697 8 8.73638 8 8 8C5.79086 8 4 9.79086 4 12C4 14.2091 5.79086 16 8 16Z",
    fill: "#A259FF"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M8 8C8.73638 8 10.0697 8 12 8V0C10.0697 0 8.73638 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z",
    fill: "#F24E1E"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16 8H12V0H16C18.2091 0 20 1.79086 20 4C20 6.20914 18.2091 8 16 8Z",
    fill: "#FF7262"
  }));
});
Figma.displayName = 'Figma';