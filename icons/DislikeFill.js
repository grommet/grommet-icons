"use strict";

exports.__esModule = true;
exports.DislikeFill = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DislikeFill = exports.DislikeFill = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dislike"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    fillRule: "evenodd",
    d: "M13 24h.997l.003-.997L13 23l1 .003v-.261l.002-.698.006-2.207c.004-1.665.008-3.498.008-4.163 0-.42.155-.83.454-1.132.287-.291.767-.542 1.53-.542h6.999L23 13v1h1V0h-1v1-1H4C2.846 0 1.797.29 1.043 1.043.289 1.797 0 2.846 0 4v9.999L1 14H0v1h7v5c0 1.154.29 2.203 1.043 2.957C8.797 23.711 9.846 24 11 24h2Zm6-12V2h3v10h-3Z",
    clipRule: "evenodd"
  }));
});
DislikeFill.displayName = 'DislikeFill';