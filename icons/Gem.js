"use strict";

exports.__esModule = true;
exports.Gem = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Gem = exports.Gem = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Gem"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 1h-.414l-.293.293-3 3L3 4.586v14.828l.293.293 3 3 .293.293h10.828l.293-.293 3-3 .293-.293V4.586l-.293-.293-3-3L17.414 1H7zM5 6v12h1V6H5zm3 15h8v-1H8v1zm11-3V6h-1v12h1zM16 3H8v1h8V3zm0 3v12H8V6h8z",
    fill: "#000"
  }));
});
Gem.displayName = 'Gem';