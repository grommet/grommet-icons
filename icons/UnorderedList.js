"use strict";

exports.__esModule = true;
exports.UnorderedList = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UnorderedList = exports.UnorderedList = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UnorderedList"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M5.94 6.42H24v1.75H5.94zm0 5.29H24v1.75H5.94zm0 5.28H24v1.75H5.94z"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "1.85",
    cy: "7.29",
    r: "1.52"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "1.85",
    cy: "12.58",
    r: "1.52"
  }), /*#__PURE__*/_react["default"].createElement("circle", {
    cx: "1.85",
    cy: "17.87",
    r: "1.52"
  }));
});
UnorderedList.displayName = 'UnorderedList';