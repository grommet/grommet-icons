"use strict";

exports.__esModule = true;
exports.Archlinux = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Archlinux = exports.Archlinux = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Archlinux"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#1793D1",
    fillRule: "evenodd",
    d: "M11.995 0c-1.068 2.619-1.712 4.332-2.901 6.873.729.773 1.624 1.673 3.077 2.69-1.562-.643-2.628-1.289-3.425-1.959C7.224 10.78 4.84 15.304 0 24c3.804-2.196 6.752-3.55 9.5-4.066a6.964 6.964 0 0 1-.18-1.63l.004-.121c.06-2.437 1.328-4.311 2.83-4.184 1.501.127 2.668 2.207 2.608 4.644-.011.459-.063.9-.153 1.309 2.717.532 5.634 1.882 9.387 4.048-.74-1.362-1.4-2.59-2.031-3.76-.994-.77-2.03-1.771-4.143-2.856 1.452.377 2.493.813 3.303 1.3C14.713 6.746 14.195 5.16 11.995 0z"
  }));
});
Archlinux.displayName = 'Archlinux';