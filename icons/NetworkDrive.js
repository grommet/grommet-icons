"use strict";

exports.__esModule = true;
exports.NetworkDrive = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var NetworkDrive = exports.NetworkDrive = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "NetworkDrive"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 7C7.10457 7 8 7.89543 8 9C8 10.1046 7.10457 11 6 11C4.89543 11 4 10.1046 4 9C4 7.89543 4.89543 7 6 7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 4C20.7614 4 23 6.23858 23 9C23 11.7614 20.7614 14 18 14H13V16.1738C14.1647 16.5859 15 17.6941 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.6941 9.83532 16.5859 11 16.1738V14H6C3.23858 14 1 11.7614 1 9C1 6.23858 3.23858 4 6 4H18ZM12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18ZM6 6C4.34315 6 3 7.34315 3 9C3 10.6569 4.34315 12 6 12H18C19.6569 12 21 10.6569 21 9C21 7.34315 19.6569 6 18 6H6Z",
    fill: "#000"
  }));
});
NetworkDrive.displayName = 'NetworkDrive';