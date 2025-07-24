"use strict";

exports.__esModule = true;
exports.List = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var List = exports.List = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "List"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.00977 17C4.56205 17 5.00977 17.4477 5.00977 18C5.00977 18.5523 4.56205 19 4.00977 19H4C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17H4.00977Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14 17C14.5523 17 15 17.4477 15 18C15 18.5523 14.5523 19 14 19H8C7.44772 19 7 18.5523 7 18C7 17.4477 7.44772 17 8 17H14Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.00977 13C4.56205 13 5.00977 13.4477 5.00977 14C5.00977 14.5523 4.56205 15 4.00977 15H4C3.44772 15 3 14.5523 3 14C3 13.4477 3.44772 13 4 13H4.00977Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 13C20.5523 13 21 13.4477 21 14C21 14.5523 20.5523 15 20 15H8C7.44772 15 7 14.5523 7 14C7 13.4477 7.44772 13 8 13H20Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.00977 9C4.56205 9 5.00977 9.44772 5.00977 10C5.00977 10.5523 4.56205 11 4.00977 11H4C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H4.00977Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 9C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H8C7.44772 11 7 10.5523 7 10C7 9.44772 7.44772 9 8 9H17Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.00977 5C4.56205 5 5.00977 5.44772 5.00977 6C5.00977 6.55228 4.56205 7 4.00977 7H4C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5H4.00977Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 5C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H8C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5H20Z",
    fill: "#000"
  }));
});
List.displayName = 'List';