"use strict";

exports.__esModule = true;
exports.Switch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Switch = exports.Switch = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Switch"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 13C20.7614 13 23 15.2386 23 18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18C1 15.2386 3.23858 13 6 13H18ZM6 15C4.34315 15 3 16.3431 3 18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18C9 16.3431 7.65685 15 6 15ZM10 15C10.6278 15.8357 11 16.8743 11 18C11 19.1257 10.6278 20.1643 10 21H18C19.6569 21 21 19.6569 21 18C21 16.3431 19.6569 15 18 15H10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6C23 8.76142 20.7614 11 18 11H6C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9H14C13.3722 8.16431 13 7.12568 13 6C13 4.87432 13.3722 3.83569 14 3H6ZM18 3C16.3431 3 15 4.34315 15 6C15 7.65685 16.3431 9 18 9C19.6569 9 21 7.65685 21 6C21 4.34315 19.6569 3 18 3Z",
    fill: "#000"
  }));
});
Switch.displayName = 'Switch';