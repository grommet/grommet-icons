"use strict";

exports.__esModule = true;
exports.DocumentWord = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentWord = exports.DocumentWord = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentWord"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2529 6.04297C22.3612 6.99288 23 8.38022 23 9.83984V18C23 20.7614 20.7614 23 18 23H15C14.4477 23 14 22.5523 14 22C14 21.4477 14.4477 21 15 21H18C19.6569 21 21 19.6569 21 18V9.83984C21 9.55255 20.9577 9.27017 20.8789 9H17C15.3431 9 14 7.65685 14 6V3.04004C13.8423 3.01447 13.6821 3.00001 13.5205 3H6C4.34315 3 3 4.34315 3 6V8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8V6C1 3.23858 3.23858 1 6 1H13.5205ZM16 6C16 6.55228 16.4477 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M4.26074 17.9854L5.96875 13.6348L6.21875 13H7.75879L9.89746 17.9785L11.1152 13H13.2812L11.2197 21.2422L11.0312 22H9.35156L7.03613 16.8125L4.92188 22H3.24609L0.673828 13H2.85742L4.26074 17.9854Z",
    fill: "#000"
  }));
});
DocumentWord.displayName = 'DocumentWord';