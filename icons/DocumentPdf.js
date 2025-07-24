"use strict";

exports.__esModule = true;
exports.DocumentPdf = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentPdf = exports.DocumentPdf = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentPdf"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4.5 14C5.72039 14 6.61729 14.3935 7.16797 15.1094C7.67974 15.7749 7.75 16.5426 7.75 17C7.75 17.4574 7.67974 18.2251 7.16797 18.8906C6.61729 19.6065 5.72039 20 4.5 20H4.25V22H2V14H4.5ZM4 18H4.5C5.2786 18 5.50741 17.7687 5.58203 17.6719C5.695 17.525 5.75 17.2925 5.75 17C5.75 16.7075 5.695 16.475 5.58203 16.3281C5.50741 16.2313 5.2786 16 4.5 16H4V18Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2051 14C12.9037 14 13.7933 14.1529 14.4912 14.8604C15.1821 15.5609 15.5 16.6176 15.5 18C15.5 19.3824 15.1821 20.4391 14.4912 21.1396C13.7933 21.8471 12.9037 22 12.2051 22H9V14H12.2051ZM11 20H12.2051C12.6433 20 12.9021 19.9029 13.0674 19.7354C13.2395 19.5608 13.5 19.1173 13.5 18C13.5 16.8827 13.2395 16.4392 13.0674 16.2646C12.9021 16.0971 12.6433 16 12.2051 16H11V20Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 16H18.5V17.5H21V19.5H18.5V22H16.5V14H22V16Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2529 6.04297C22.3612 6.99288 23 8.38022 23 9.83984V11C23 11.5523 22.5523 12 22 12C21.4477 12 21 11.5523 21 11V9.83984C21 9.55255 20.9577 9.27017 20.8789 9H17C15.3431 9 14 7.65685 14 6V3.04004C13.8423 3.01447 13.6821 3.00001 13.5205 3H6C4.34315 3 3 4.34315 3 6V11C3 11.5523 2.55228 12 2 12C1.44772 12 1 11.5523 1 11V6C1 3.23858 3.23858 1 6 1H13.5205ZM16 6C16 6.55228 16.4477 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }));
});
DocumentPdf.displayName = 'DocumentPdf';