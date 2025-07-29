"use strict";

exports.__esModule = true;
exports.Database = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Database = exports.Database = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Database"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 15H5V13H6V15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 15H10V13H19V15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 7H5V5H6V7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 7H10V5H19V7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1C21.6569 1 23 2.34315 23 4V8C23 8.76947 22.7077 9.46897 22.2314 10C22.7077 10.531 23 11.2305 23 12V16C23 17.6569 21.6569 19 20 19H13V21H22.5C23.0523 21 23.5 21.4477 23.5 22C23.5 22.5523 23.0523 23 22.5 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H11V19H4C2.34315 19 1 17.6569 1 16V12C1 11.2305 1.29228 10.531 1.76855 10C1.29228 9.46897 1 8.76947 1 8V4C1 2.34315 2.34315 1 4 1H20ZM4 11C3.44772 11 3 11.4477 3 12V16C3 16.5523 3.44772 17 4 17H20C20.5523 17 21 16.5523 21 16V12C21 11.4477 20.5523 11 20 11H4ZM4 3C3.44772 3 3 3.44772 3 4V8C3 8.55228 3.44772 9 4 9H20C20.5523 9 21 8.55228 21 8V4C21 3.44772 20.5523 3 20 3H4Z",
    fill: "#000"
  }));
});
Database.displayName = 'Database';