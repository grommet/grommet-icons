"use strict";

exports.__esModule = true;
exports.Amex = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Amex = exports.Amex = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Amex"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#002663",
    fillRule: "evenodd",
    d: "m4.314 11.965-.82-1.997-.815 1.997h1.635zm7.859 2.161-.005-3.922-1.736 3.922h-1.05L7.64 10.2v3.926H5.206l-.46-1.117H2.253l-.465 1.117h-1.3l2.144-5.008H4.41l2.036 4.742V9.118H8.4l1.567 3.397 1.439-3.397H13.4v5.008h-1.227zm3.133-1.024v-.997h2.628v-1.022h-2.628v-.911h3.001l1.31 1.46-1.368 1.47h-2.943zm8.111 1.044h-1.556l-1.474-1.659-1.532 1.659h-4.742v-5.01h4.815l1.473 1.642 1.523-1.642h1.564l-2.327 2.505 2.256 2.505z"
  }));
});
Amex.displayName = 'Amex';