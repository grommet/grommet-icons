"use strict";

exports.__esModule = true;
exports.Moon = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Moon = exports.Moon = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Moon"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    stroke: "#000",
    fill: "none",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M9.874 5.008c2.728-1.68 6.604-1.014 8.25.197-2.955.84-5.11 3.267-5.242 6.415-.18 4.28 3.006 6.588 5.24 7.152-1.964 1.343-4.36 1.293-5.235 1.172-3.568-.492-6.902-3.433-7.007-7.711-.106-4.278 2.573-6.35 3.994-7.225z"
  }));
});
Moon.displayName = 'Moon';