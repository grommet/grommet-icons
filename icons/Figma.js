"use strict";

exports.__esModule = true;
exports.Figma = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Figma = exports.Figma = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Figma"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    transform: "translate(4)"
  }, /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4",
    fill: "#19BCFE"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#09CF83",
    d: "M4 24a4 4 0 0 0 4-4v-4H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#A259FF",
    d: "M4 16h4V8H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F24E1E",
    d: "M4 8h4V0H4a4 4 0 1 0 0 8z"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#FF7262",
    d: "M12 8H8V0h4a4 4 0 1 1 0 8z"
  })));
});
Figma.displayName = 'Figma';