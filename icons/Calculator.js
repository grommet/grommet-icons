"use strict";

exports.__esModule = true;
exports.Calculator = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Calculator = exports.Calculator = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Calculator"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 15.2769C8.10457 15.2769 9 16.1723 9 17.2769C9 18.3814 8.10457 19.2769 7 19.2769C5.89543 19.2769 5 18.3814 5 17.2769C5 16.1723 5.89543 15.2769 7 15.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 15.2769C13.1046 15.2769 14 16.1723 14 17.2769C14 18.3814 13.1046 19.2769 12 19.2769C10.8954 19.2769 10 18.3814 10 17.2769C10 16.1723 10.8954 15.2769 12 15.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M17 10.2769C18.1046 10.2769 19 11.1723 19 12.2769V17.2769C19 18.3814 18.1046 19.2769 17 19.2769C15.8954 19.2769 15 18.3814 15 17.2769V12.2769C15 11.1723 15.8954 10.2769 17 10.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7 10.2769C8.10457 10.2769 9 11.1723 9 12.2769C9 13.3814 8.10457 14.2769 7 14.2769C5.89543 14.2769 5 13.3814 5 12.2769C5 11.1723 5.89543 10.2769 7 10.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 10.2769C13.1046 10.2769 14 11.1723 14 12.2769C14 13.3814 13.1046 14.2769 12 14.2769C10.8954 14.2769 10 13.3814 10 12.2769C10 11.1723 10.8954 10.2769 12 10.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.27686C20.7614 1.27686 23 3.51543 23 6.27686V18.2769C23 21.0383 20.7614 23.2769 18 23.2769H6C3.23858 23.2769 1 21.0383 1 18.2769V6.27686C1 3.51543 3.23858 1.27686 6 1.27686H18ZM3 18.2769C3 19.9337 4.34315 21.2769 6 21.2769H18C19.6569 21.2769 21 19.9337 21 18.2769V8.27686H3V18.2769ZM6 3.27686C4.34315 3.27686 3 4.62 3 6.27686H21C21 4.62 19.6569 3.27686 18 3.27686H6Z",
    fill: "#000"
  }));
});
Calculator.displayName = 'Calculator';