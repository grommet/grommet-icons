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
    d: "M6 15.2769H5V13.2769H6V15.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 15.2769H10V13.2769H19V15.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 7.27686H5V5.27686H6V7.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 7.27686H10V5.27686H19V7.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V8.27686C23 9.04633 22.7077 9.74582 22.2314 10.2769C22.7077 10.8079 23 11.5074 23 12.2769V16.2769C23 17.9337 21.6569 19.2769 20 19.2769H13V21.2769H22.5C23.0523 21.2769 23.5 21.7246 23.5 22.2769C23.5 22.8291 23.0523 23.2769 22.5 23.2769H2C1.44772 23.2769 1 22.8291 1 22.2769C1 21.7246 1.44772 21.2769 2 21.2769H11V19.2769H4C2.34315 19.2769 1 17.9337 1 16.2769V12.2769C1 11.5074 1.29228 10.8079 1.76855 10.2769C1.29228 9.74582 1 9.04633 1 8.27686V4.27686C1 2.62 2.34315 1.27686 4 1.27686H20ZM4 11.2769C3.44772 11.2769 3 11.7246 3 12.2769V16.2769C3 16.8291 3.44772 17.2769 4 17.2769H20C20.5523 17.2769 21 16.8291 21 16.2769V12.2769C21 11.7246 20.5523 11.2769 20 11.2769H4ZM4 3.27686C3.44772 3.27686 3 3.72457 3 4.27686V8.27686C3 8.82914 3.44772 9.27686 4 9.27686H20C20.5523 9.27686 21 8.82914 21 8.27686V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H4Z",
    fill: "#000"
  }));
});
Database.displayName = 'Database';