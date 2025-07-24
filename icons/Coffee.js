"use strict";

exports.__esModule = true;
exports.Coffee = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Coffee = exports.Coffee = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Coffee"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19 1C20.1046 1 21 1.89543 21 3V6C21 6.55228 20.5523 7 20 7H19.8828L18.2109 20.3721C18.0233 21.8734 16.7473 23 15.2344 23H7.76562C6.25266 23 4.97673 21.8734 4.78906 20.3721L3.11719 7H3C2.44772 7 2 6.55228 2 6V3C2 1.89543 2.89543 1 4 1H19ZM6.77344 20.124C6.83599 20.6244 7.2613 21 7.76562 21H15.2344C15.7387 21 16.164 20.6244 16.2266 20.124L17.8672 7H5.13281L6.77344 20.124ZM4 5H19V3H4V5Z",
    fill: "#000"
  }));
});
Coffee.displayName = 'Coffee';