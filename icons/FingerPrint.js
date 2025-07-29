"use strict";

exports.__esModule = true;
exports.FingerPrint = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var FingerPrint = exports.FingerPrint = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "FingerPrint"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 1C15.5523 1 16 1.44772 16 2C16 2.55228 15.5523 3 15 3C10.5817 3 7 6.58172 7 11V13C7 14.1046 7.89543 15 9 15C10.1046 15 11 14.1046 11 13V11C11 8.79086 12.7909 7 15 7C17.2091 7 19 8.79086 19 11V13C19 18.5228 14.5228 23 9 23C8.44772 23 8 22.5523 8 22C8 21.4477 8.44772 21 9 21C13.4183 21 17 17.4183 17 13V11C17 9.89543 16.1046 9 15 9C13.8954 9 13 9.89543 13 11V13C13 15.2091 11.2091 17 9 17C6.79086 17 5 15.2091 5 13V11C5 5.47715 9.47715 1 15 1Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 10C15.5523 10 16 10.4477 16 11V13C16 16.7451 13.0589 19.8037 9.36035 19.9912L9 20C5.13401 20 2 16.866 2 13V11C2 10.4477 2.44772 10 3 10C3.55228 10 4 10.4477 4 11V13C4 15.7614 6.23858 18 9 18L9.25684 17.9932C11.8989 17.8595 14 15.6753 14 13V11C14 10.4477 14.4477 10 15 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.3604 4.00879C19.0589 4.19633 22 7.25486 22 11V14C22 14.5523 21.5523 15 21 15C20.4477 15 20 14.5523 20 14V11C20 8.32472 17.8989 6.14053 15.2568 6.00684L15 6C12.2386 6 10 8.23858 10 11V13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13V11C8 7.13401 11.134 4 15 4L15.3604 4.00879Z",
    fill: "#000"
  }));
});
FingerPrint.displayName = 'FingerPrint';