"use strict";

exports.__esModule = true;
exports.Sort = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Sort = exports.Sort = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Sort"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 19C4.10457 19 5 19.8954 5 21C5 22.1046 4.10457 23 3 23C1.89543 23 1 22.1046 1 21C1 19.8954 1.89543 19 3 19Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 20C11.5523 20 12 20.4477 12 21C12 21.5523 11.5523 22 11 22H8C7.44772 22 7 21.5523 7 21C7 20.4477 7.44772 20 8 20H11Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 13C4.10457 13 5 13.8954 5 15C5 16.1046 4.10457 17 3 17C1.89543 17 1 16.1046 1 15C1 13.8954 1.89543 13 3 13Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 14C21.5523 14 22 14.4477 22 15C22 15.5523 21.5523 16 21 16H8C7.44772 16 7 15.5523 7 15C7 14.4477 7.44772 14 8 14H21Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 7C4.10457 7 5 7.89543 5 9C5 10.1046 4.10457 11 3 11C1.89543 11 1 10.1046 1 9C1 7.89543 1.89543 7 3 7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 8C17.5523 8 18 8.44772 18 9C18 9.55228 17.5523 10 17 10H8C7.44772 10 7 9.55228 7 9C7 8.44772 7.44772 8 8 8H17Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 1C4.10457 1 5 1.89543 5 3C5 4.10457 4.10457 5 3 5C1.89543 5 1 4.10457 1 3C1 1.89543 1.89543 1 3 1Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 2C21.5523 2 22 2.44772 22 3C22 3.55228 21.5523 4 21 4H8C7.44772 4 7 3.55228 7 3C7 2.44772 7.44772 2 8 2H21Z",
    fill: "#000"
  }));
});
Sort.displayName = 'Sort';