"use strict";

exports.__esModule = true;
exports.TextWrap = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var TextWrap = exports.TextWrap = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "TextWrap"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 21C22.5523 21 23 21.4477 23 22C23 22.5523 22.5523 23 22 23H2C1.44772 23 1 22.5523 1 22C1 21.4477 1.44772 21 2 21H22Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 17C22.5523 17 23 17.4477 23 18C23 18.5523 22.5523 19 22 19H2C1.44772 19 1 18.5523 1 18C1 17.4477 1.44772 17 2 17H22Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 5C7.10478 5 8 5.89522 8 7C8 8.10478 7.10478 9 6 9C4.89522 9 4 8.10478 4 7C4 5.89522 4.89522 5 6 5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M11 1C13.2091 1 15 2.79086 15 5V11C15 13.2091 13.2091 15 11 15H5C2.79086 15 1 13.2091 1 11V5C1 2.79086 2.79086 1 5 1H11ZM5 3C3.89543 3 3 3.89543 3 5V11C3 12.1046 3.89543 13 5 13H6.63281L9.44434 7.54199L9.50684 7.4375C9.66627 7.20319 9.9193 7.04599 10.2041 7.00879C10.5294 6.96638 10.8551 7.08583 11.0752 7.3291L13 9.45605V5C13 3.89543 12.1046 3 11 3H5ZM8.88184 13H11C11.7049 13 12.3225 12.634 12.6787 12.083L10.5605 9.74121L8.88184 13Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 13C22.5523 13 23 13.4477 23 14C23 14.5523 22.5523 15 22 15H18C17.4477 15 17 14.5523 17 14C17 13.4477 17.4477 13 18 13H22Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 9C22.5523 9 23 9.44772 23 10C23 10.5523 22.5523 11 22 11H18C17.4477 11 17 10.5523 17 10C17 9.44772 17.4477 9 18 9H22Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 5C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H18C17.4477 7 17 6.55228 17 6C17 5.44772 17.4477 5 18 5H22Z",
    fill: "#000"
  }));
});
TextWrap.displayName = 'TextWrap';