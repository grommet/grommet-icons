"use strict";

exports.__esModule = true;
exports.Power = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Power = exports.Power = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Power"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 8V2C11 1.44772 11.4477 1 12 1C12.5523 1 13 1.44772 13 2V8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 11.9998C1.00013 8.0058 3.34877 4.45265 6.5 2.63354C6.97831 2.35745 7.5901 2.52146 7.86621 2.99976C8.1423 3.47806 7.9783 4.08986 7.5 4.36597C4.90768 5.86245 3.00013 8.78703 3 11.9998C3 17.0436 7.02013 20.9998 12 20.9998C16.9799 20.9998 21 17.0436 21 11.9998C20.9999 8.78713 19.0923 5.8625 16.5 4.36597C16.0218 4.08982 15.8577 3.47803 16.1338 2.99976C16.3928 2.55138 16.9469 2.37966 17.4092 2.58765L17.5 2.63452L17.793 2.80933C20.7956 4.6753 22.9999 8.13057 23 11.9998C23 18.1577 18.0748 22.9998 12 22.9998C5.92518 22.9998 1 18.1577 1 11.9998Z",
    fill: "#000"
  }));
});
Power.displayName = 'Power';