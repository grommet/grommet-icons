"use strict";

exports.__esModule = true;
exports.Sans = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Sans = exports.Sans = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Sans"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 12.9297C8.10456 12.9297 8.99998 13.8251 9 14.9297C9 16.0343 8.10457 16.9297 7 16.9297C5.89544 16.9297 5 16.0342 5 14.9297C5.00001 13.8251 5.89545 12.9297 7 12.9297Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 13.0703C18.1045 13.0703 18.9999 13.9658 19 15.0703C19 16.1749 18.1046 17.0703 17 17.0703C15.8954 17.0703 15 16.1749 15 15.0703C15.0001 13.9658 15.8955 13.0703 17 13.0703Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 0C21.3137 0 24 2.68629 24 6V16C24 18.0874 22.9336 19.9252 21.3164 21H22L22.1025 21.0049C22.6067 21.0562 23 21.4823 23 22C23 22.5177 22.6067 22.9438 22.1025 22.9951L22 23H2C1.44773 23 1 22.5523 1 22C1.00002 21.4477 1.44774 21 2 21H2.68359C1.06636 19.9252 0 18.0874 0 16V6C0 2.68629 2.68629 0 6 0H18ZM6 2C3.79086 2 2 3.79086 2 6V16C2 18.2091 3.79086 20 6 20H11V2H6ZM13 20H18C20.2091 20 22 18.2091 22 16V6C22 3.79086 20.2091 2 18 2H13V20Z",
    fill: "#000"
  }));
});
Sans.displayName = 'Sans';