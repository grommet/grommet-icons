"use strict";

exports.__esModule = true;
exports.DocumentImage = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentImage = exports.DocumentImage = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentImage"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5 13C6.10457 13 7 13.8954 7 15C7 16.1046 6.10457 17 5 17C3.89543 17 3 16.1046 3 15C3 13.8954 3.89543 13 5 13Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 10C13.6569 10 15 11.3431 15 13V21C15 22.6569 13.6569 24 12 24H3C1.34315 24 0 22.6569 0 21V13C0 11.3431 1.34315 10 3 10H12ZM4.86816 22H5.60449L5.43066 21.8447L5.15527 21.5693L4.86816 22ZM8.50879 21.54C8.38807 21.7211 8.24239 21.8733 8.08203 22H12C12.5523 22 13 21.5523 13 21V20.332L11.0479 17.7305L8.50879 21.54ZM3 12C2.44772 12 2 12.4477 2 13V21C2 21.3859 2.21896 21.72 2.53906 21.8867L3.49121 20.46C4.19127 19.4101 5.67692 19.2631 6.56934 20.1553L6.84473 20.4307L9.38379 16.6211C10.1492 15.4731 11.8205 15.4265 12.6484 16.5303L13 16.999V13C13 12.4477 12.5523 12 12 12H3Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2529 6.04297C22.3612 6.99288 23 8.38022 23 9.83984V18C23 20.7614 20.7614 23 18 23H17.5C16.9477 23 16.5 22.5523 16.5 22C16.5 21.4477 16.9477 21 17.5 21H18C19.6569 21 21 19.6569 21 18V9.83984C21 9.55255 20.9577 9.27017 20.8789 9H17C15.3431 9 14 7.65685 14 6V3.04004C13.8423 3.01447 13.6821 3.00001 13.5205 3H6C4.34315 3 3 4.34315 3 6V8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8V6C1 3.23858 3.23858 1 6 1H13.5205ZM16 6C16 6.55228 16.4477 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }));
});
DocumentImage.displayName = 'DocumentImage';