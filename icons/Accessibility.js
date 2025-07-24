"use strict";

exports.__esModule = true;
exports.Accessibility = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Accessibility = exports.Accessibility = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Accessibility"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 7C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H14V13.1807L19.8174 21.4229C20.1359 21.874 20.0282 22.4989 19.5771 22.8174C19.126 23.1359 18.5011 23.0282 18.1826 22.5771L12.1826 14.0771C12.1654 14.0528 12.1526 14.0257 12.1377 14H11.8633C11.8551 14.0141 11.8487 14.0292 11.8398 14.043L6.33984 22.543C6.03988 23.0065 5.42068 23.1396 4.95703 22.8398C4.49346 22.5399 4.3604 21.9207 4.66016 21.457L10 13.2041V9H3C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7H21Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 2C13.1046 2 14 2.89543 14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 10.8954 2 12 2Z",
    fill: "#000"
  }));
});
Accessibility.displayName = 'Accessibility';