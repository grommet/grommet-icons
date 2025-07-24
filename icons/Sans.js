"use strict";

exports.__esModule = true;
exports.Sans = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Sans = exports.Sans = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Sans"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 13.2065C8.10456 13.2065 8.99998 14.102 9 15.2065C9 16.3111 8.10457 17.2065 7 17.2065C5.89544 17.2065 5 16.3111 5 15.2065C5.00001 14.102 5.89545 13.2066 7 13.2065Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 13.3472C18.1045 13.3472 18.9999 14.2427 19 15.3472C19 16.4517 18.1046 17.3472 17 17.3472C15.8954 17.3472 15 16.4517 15 15.3472C15.0001 14.2427 15.8955 13.3472 17 13.3472Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 0.276855C21.3137 0.276855 24 2.96315 24 6.27686V16.2769C24 18.3642 22.9336 20.202 21.3164 21.2769H22L22.1025 21.2817C22.6067 21.3331 23 21.7592 23 22.2769C23 22.7945 22.6067 23.2207 22.1025 23.272L22 23.2769H2C1.44773 23.2768 1 22.8291 1 22.2769C1.00002 21.7246 1.44774 21.2769 2 21.2769H2.68359C1.06636 20.202 0 18.3642 0 16.2769V6.27686C0 2.96315 2.68629 0.276855 6 0.276855H18ZM6 2.27686C3.79086 2.27686 2 4.06772 2 6.27686V16.2769C2 18.486 3.79086 20.2769 6 20.2769H11V2.27686H6ZM13 20.2769H18C20.2091 20.2769 22 18.486 22 16.2769V6.27686C22 4.06772 20.2091 2.27686 18 2.27686H13V20.2769Z",
    fill: "#000"
  }));
});
Sans.displayName = 'Sans';