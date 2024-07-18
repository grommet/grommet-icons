"use strict";

exports.__esModule = true;
exports.Phone = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Phone = exports.Phone = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Phone"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M6.375 2C5 2 3 3.5 2.5 4.5c-.715 1.43-.597 1.99-.125 3.5.625 2 2.457 5.545 5 8 3.625 3.5 7 5 8.5 5.5s3.125 0 4.125-1 2-2 .875-3.5c-.797-1.063-1.959-2.292-3.375-3-1.288-.644-2.056-.41-2.5.5-.246.503-.322 1.466-.5 2-.225.674-1.125.5-2.125 0C11.418 16.021 9 14 7 11c-1.24-1.859.742-1.87 2-2.5 1-.5 1.31-1.65.5-3C8 3 7.5 2 6.375 2z"
  }));
});
Phone.displayName = 'Phone';