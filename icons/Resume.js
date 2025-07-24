"use strict";

exports.__esModule = true;
exports.Resume = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Resume = exports.Resume = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Resume"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M4 1C5.65685 1 7 2.34315 7 4V20C7 21.6569 5.65685 23 4 23C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1ZM4 3C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21C4.55228 21 5 20.5523 5 20V4C5 3.44772 4.55228 3 4 3Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.55273 2.10547C9.89146 1.93611 10.2966 1.97304 10.5996 2.2002L22.5996 11.2002C22.8514 11.389 23 11.6852 23 12C23 12.3148 22.8514 12.611 22.5996 12.7998L10.5996 21.7998C10.2966 22.027 9.89146 22.0639 9.55273 21.8945C9.21395 21.7251 9 21.3788 9 21V3C9 2.62123 9.21395 2.27486 9.55273 2.10547ZM11 19L20.334 12L11 4.99902V19Z",
    fill: "#000"
  }));
});
Resume.displayName = 'Resume';