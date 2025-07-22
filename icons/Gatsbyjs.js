"use strict";

exports.__esModule = true;
exports.Gatsbyjs = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gatsbyjs = exports.Gatsbyjs = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gatsbyjs"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#639",
    d: "M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm10-11.908h-6.452v1.834h4.424c-.645 2.753-2.674 5.046-5.346 5.964L4.027 9.34c1.106-3.211 4.24-5.505 7.835-5.505 2.765 0 5.254 1.377 6.82 3.487l1.383-1.193C18.22 3.651 15.272 2 11.862 2 7.069 2 3.014 5.395 2 9.89L14.165 22C18.59 20.899 22 16.862 22 12.091v.001zM2 12c0 2.593 1.018 5.092 2.963 7.037C6.908 20.982 9.5 22 12 22L2 12z"
  }));
});
Gatsbyjs.displayName = 'Gatsbyjs';