"use strict";

exports.__esModule = true;
exports.StackOverflow = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StackOverflow = exports.StackOverflow = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StackOverflow"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#BCBBBB",
    d: "M19.127 21.866v-6.43h2.134V24H2v-8.563h2.134v6.43h14.993Z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F48023",
    d: "m6.49 14.827 10.475 2.19.444-2.107-10.476-2.19-.443 2.107Zm1.385-4.989 9.7 4.518.887-1.94-9.7-4.545-.887 1.967Zm2.688-4.766 8.231 6.845 1.358-1.635-8.23-6.846-1.359 1.636ZM15.884 0l-1.718 1.275 6.374 8.591 1.719-1.275L15.884 0ZM6.268 19.704h10.697V17.57H6.268v2.134Z"
  }));
});
StackOverflow.displayName = 'StackOverflow';