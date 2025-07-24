"use strict";

exports.__esModule = true;
exports.Organization = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Organization = exports.Organization = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Organization"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 13.71C14.5523 13.71 15 14.1577 15 14.71C15 15.2622 14.5523 15.71 14 15.71H6C5.44772 15.71 5 15.2622 5 14.71C5 14.1577 5.44772 13.71 6 13.71H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 9.70996C14.5523 9.70996 15 10.1577 15 10.71C15 11.2622 14.5523 11.71 14 11.71H6C5.44772 11.71 5 11.2622 5 10.71C5 10.1577 5.44772 9.70996 6 9.70996H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 5.70996C14.5523 5.70996 15 6.15768 15 6.70996C15 7.26225 14.5523 7.70996 14 7.70996H6C5.44772 7.70996 5 7.26225 5 6.70996C5 6.15768 5.44772 5.70996 6 5.70996H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1.70996C16.6569 1.70996 18 3.05311 18 4.70996V5.70996H19C20.6569 5.70996 22 7.05311 22 8.70996V21.71C22.5523 21.71 23 22.1577 23 22.71C23 23.2622 22.5523 23.71 22 23.71H2C1.44772 23.71 1 23.2622 1 22.71C1 22.1577 1.44772 21.71 2 21.71V4.70996C2 3.05311 3.34315 1.70996 5 1.70996H15ZM5 3.70996C4.44772 3.70996 4 4.15768 4 4.70996V21.71H7V19.71C7 18.6054 7.89543 17.71 9 17.71H11C12.1046 17.71 13 18.6054 13 19.71V21.71H16V4.70996C16 4.15768 15.5523 3.70996 15 3.70996H5ZM9 21.71H11V19.71H9V21.71ZM18 21.71H20V8.70996C20 8.15768 19.5523 7.70996 19 7.70996H18V21.71Z",
    fill: "#000"
  }));
});
Organization.displayName = 'Organization';