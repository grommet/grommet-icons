"use strict";

exports.__esModule = true;
exports.Performance = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Performance = exports.Performance = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Performance"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "m12 19-2 3-3-1-.5-3.5L3 17l-1-3 3-2-3-2 1-3 3.5-.5L7 3l3-1 2 3 2-3 3 1 .5 3.5L21 7l1 3-3 2 3 2-1 3-3.5.5L17 21l-3 1-2-3zm0-3a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
  }));
});
Performance.displayName = 'Performance';