"use strict";

exports.__esModule = true;
exports.DocumentVideo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var DocumentVideo = exports.DocumentVideo = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "DocumentVideo"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M13.5205 1C14.714 1.00005 15.8682 1.42739 16.7744 2.2041L21.2529 6.04297C22.3612 6.99288 23 8.38022 23 9.83984V18C23 20.7614 20.7614 23 18 23H17.5C16.9477 23 16.5 22.5523 16.5 22C16.5 21.4477 16.9477 21 17.5 21H18C19.6569 21 21 19.6569 21 18V9.83984C21 9.55255 20.9577 9.27017 20.8789 9H17C15.3431 9 14 7.65685 14 6V3.04004C13.8423 3.01447 13.6821 3.00001 13.5205 3H6C4.34315 3 3 4.34315 3 6V8C3 8.55228 2.55228 9 2 9C1.44772 9 1 8.55228 1 8V6C1 3.23858 3.23858 1 6 1H13.5205ZM16 6C16 6.55228 16.4477 7 17 7H19.2969L16 4.17383V6Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9 11C10.1046 11 11 11.8954 11 13V13.3818L13.1055 12.3291C14.4353 11.6642 16 12.6314 16 14.1182V18.8818C16 20.3686 14.4353 21.3358 13.1055 20.6709L11 19.6182V20C11 21.1046 10.1046 22 9 22H2C0.89543 22 0 21.1046 0 20V13C0 11.8954 0.895431 11 2 11H9ZM2 20H9V13H2V20ZM11 15.6182V17.3818L14 18.8818V14.1182L11 15.6182Z",
    fill: "#000"
  }));
});
DocumentVideo.displayName = 'DocumentVideo';