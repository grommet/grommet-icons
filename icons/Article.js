"use strict";

exports.__esModule = true;
exports.Article = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Article = exports.Article = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Article"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 16H10C9.44771 16 9 15.5523 9 15C9 14.4477 9.44771 14 10 14H19V16Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 12H10C9.44771 12 9 11.5523 9 11C9 10.4477 9.44771 10 10 10H12V12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M17 6C18.6569 6 20 7.34315 20 9C20 10.6569 18.6569 12 17 12C15.3431 12 14 10.6569 14 9C14 7.34315 15.3431 6 17 6ZM17 8C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10C17.5523 10 18 9.55228 18 9C18 8.44772 17.5523 8 17 8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 8H10C9.44771 8 9 7.55228 9 7C9 6.44772 9.44771 6 10 6H12V8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M21 2C22.6569 2 24 3.34315 24 5V18.5C24 20.433 22.433 22 20.5 22H3.5C1.567 22 0 20.433 0 18.5V9C0 7.34315 1.34315 6 3 6H5V5C5 3.34315 6.34315 2 8 2H21ZM3 8C2.44772 8 2 8.44772 2 9V18.5C2 19.3284 2.67157 20 3.5 20C4.32843 20 5 19.3284 5 18.5V8H3ZM8 4C7.44772 4 7 4.44772 7 5V18.5C7 19.0368 6.87907 19.5454 6.66309 20H20.5C21.3284 20 22 19.3284 22 18.5V5C22 4.44772 21.5523 4 21 4H8Z",
    fill: "#000"
  }));
});
Article.displayName = 'Article';