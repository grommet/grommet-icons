"use strict";

exports.__esModule = true;
exports.Video = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Video = exports.Video = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Video"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.5 8C8.05228 8 8.5 8.44772 8.5 9C8.5 9.55228 8.05228 10 7.5 10H6C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8H7.5Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 4C15.6569 4 17 5.34315 17 7V8.38184L21.5527 6.10547L21.6719 6.05566C21.9539 5.95764 22.2676 5.99015 22.5254 6.14941C22.8202 6.33162 23 6.65342 23 7V17C23 17.3466 22.8202 17.6684 22.5254 17.8506C22.2306 18.0327 21.8626 18.0495 21.5527 17.8945L17 15.6182V17C17 18.6569 15.6569 20 14 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H14ZM4 6C3.44772 6 3 6.44772 3 7V17C3 17.5523 3.44772 18 4 18H14C14.5523 18 15 17.5523 15 17V7C15 6.44772 14.5523 6 14 6H4ZM17 10.6182V13.3818L21 15.3818V8.61816L17 10.6182Z",
    fill: "#000"
  }));
});
Video.displayName = 'Video';