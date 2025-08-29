"use strict";

exports.__esModule = true;
exports.Help = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Help = exports.Help = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CircleQuestion"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 16C12.5523 16 13 16.4477 13 17V17.0996C13 17.6519 12.5523 18.0996 12 18.0996C11.4477 18.0996 11 17.6519 11 17.0996V17C11 16.4477 11.4477 16 12 16Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 6C14.5523 6 16 7.94772 16 9.5C16 10.5122 15.6467 11.2674 15.082 11.832C14.6992 12.2149 14.2342 12.4891 13.8281 12.7012L13.4473 12.8945C13.0798 13.0782 13.0552 13.1771 13.0537 13.1836C13.0423 13.2122 13.0239 13.2755 13.0127 13.416C13.0009 13.5634 13 13.7389 13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14C11 13.5654 10.9846 12.971 11.1963 12.4414C11.4459 11.8173 11.9313 11.4162 12.5527 11.1055L12.918 10.9199C13.2501 10.7453 13.4883 10.5976 13.668 10.418C13.8533 10.2326 14 9.98781 14 9.5C14 9.05229 13.4477 8 12 8C11.3739 8 10.9548 8.15582 10.6787 8.35742C10.4055 8.55698 10.2019 8.85238 10.0908 9.26172C9.94626 9.79467 9.39721 10.1093 8.86426 9.96484C8.33129 9.82028 8.01569 9.27125 8.16016 8.73828C8.37474 7.94718 8.81413 7.2425 9.49902 6.74219C10.181 6.24412 11.0358 6 12 6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1ZM12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3Z",
    fill: "#000"
  }));
});
Help.displayName = 'Help';