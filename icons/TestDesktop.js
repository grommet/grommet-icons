"use strict";

exports.__esModule = true;
exports.TestDesktop = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var TestDesktop = exports.TestDesktop = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "TestDesktop"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6 0C6.55228 0 7 0.447715 7 1C7 1.55228 6.55228 2 6 2H5C3.34315 2 2 3.34315 2 5V15C2 16.6569 3.34315 18 5 18H19C20.6569 18 22 16.6569 22 15V5C22 3.34315 20.6569 2 19 2H18V0H19C21.7614 0 24 2.23858 24 5V15C24 17.7614 21.7614 20 19 20H15V22H18V24H6V22H9V20H5C2.23858 20 0 17.7614 0 15V5C0 2.23858 2.23858 0 5 0H6ZM11 22H13V20H11V22Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 5.14551C15 5.34976 15.063 5.54917 15.1797 5.7168L19.542 11.9824C19.8404 12.411 20 12.9211 20 13.4434C20 14.8553 18.8553 16 17.4434 16H6.55664C5.1447 16 4 14.8553 4 13.4434C4.00002 12.9211 4.15961 12.411 4.45801 11.9824L8.82031 5.7168C8.93701 5.54917 8.99997 5.34976 9 5.14551V2C8.44772 2 8 1.55228 8 1C8 0.447715 8.44772 0 9 0H15V5.14551ZM14.4268 10.1494C13.8198 10.2195 13.2286 10.5039 12.4473 10.8945C11.7287 11.2538 10.8197 11.7195 9.80176 11.8369C8.99623 11.9298 8.17162 11.8036 7.31836 11.374L6.09961 13.125C6.03467 13.2183 6.00002 13.3297 6 13.4434C6 13.7507 6.24927 14 6.55664 14H17.4434C17.7507 14 18 13.7507 18 13.4434C18 13.3297 17.9653 13.2183 17.9004 13.125L16.1709 10.6406C15.4651 10.1724 14.9099 10.0937 14.4268 10.1494ZM11 5.14551C11 5.75835 10.8121 6.35641 10.4619 6.85938L8.48047 9.70312C8.89317 9.86296 9.24929 9.88797 9.57324 9.85059C10.1802 9.78047 10.7714 9.49613 11.5527 9.10547C12.2713 8.7462 13.1803 8.28054 14.1982 8.16309C14.2756 8.15417 14.353 8.14642 14.4307 8.1416L13.5381 6.85938C13.1879 6.35641 13 5.75835 13 5.14551V2H11V5.14551Z",
    fill: "#000"
  }));
});
TestDesktop.displayName = 'TestDesktop';