"use strict";

exports.__esModule = true;
exports.Certificate = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Certificate = exports.Certificate = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Certificate"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 8C10.5523 8 11 8.44772 11 9C11 9.55228 10.5523 10 10 10H5C4.44772 10 4 9.55228 4 9C4 8.44772 4.44772 8 5 8H10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M8 5C8.55228 5 9 5.44772 9 6C9 6.55228 8.55228 7 8 7H5C4.44772 7 4 6.55228 4 6C4 5.44772 4.44772 5 5 5H8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 1C16.443 1 18.4755 2.75226 18.9121 5.06836C21.793 5.5077 24 7.99636 24 11C24 12.7766 23.2271 14.3721 22 15.4707V21.1318C21.9997 22.6791 20.3293 23.6212 19.0166 22.873L18.8906 22.7959L18 22.2021L17.1094 22.7959C15.7804 23.6817 14.0003 22.7289 14 21.1318V21H6C3.23858 21 1 18.7614 1 16V6C1 3.23858 3.23858 1 6 1H14ZM20 16.6572C19.3743 16.8784 18.7014 17 18 17C17.2986 17 16.6257 16.8784 16 16.6572V21.1318L16.8906 20.5381C17.5624 20.0902 18.4376 20.0902 19.1094 20.5381L20 21.1318V16.6572ZM6 3C4.34315 3 3 4.34315 3 6V16C3 17.6569 4.34315 19 6 19H14V15.4707C12.7729 14.3721 12 12.7766 12 11C12 8.07433 14.0942 5.63893 16.8652 5.1084C16.4856 3.88694 15.3464 3 14 3H6ZM18 7C15.7909 7 14 8.79086 14 11C14 13.2091 15.7909 15 18 15C20.2091 15 22 13.2091 22 11C22 8.79086 20.2091 7 18 7Z",
    fill: "#000"
  }));
});
Certificate.displayName = 'Certificate';