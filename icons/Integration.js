"use strict";

exports.__esModule = true;
exports.Integration = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Integration = exports.Integration = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Integration"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 8.27686C20.7614 8.27686 23 10.5154 23 13.2769V17.2769C23 20.0383 20.7614 22.2769 18 22.2769H10V20.2769H14C15.6569 20.2769 17 18.9337 17 17.2769V13.2769C17 11.62 15.6569 10.2769 14 10.2769H10V8.27686H18ZM18 10.2769C18.6278 11.1125 19 12.1512 19 13.2769V17.2769C19 18.4025 18.6278 19.4412 18 20.2769C19.6569 20.2769 21 18.9337 21 17.2769V13.2769C21 11.62 19.6569 10.2769 18 10.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M14 4.27686H10C8.34315 4.27686 7 5.62 7 7.27686V11.2769C7 12.9337 8.34315 14.2769 10 14.2769H14V16.2769H6C3.23858 16.2769 1 14.0383 1 11.2769V7.27686C1 4.51543 3.23858 2.27686 6 2.27686H14V4.27686ZM6 4.27686C4.34315 4.27686 3 5.62 3 7.27686V11.2769C3 12.882 4.26055 14.1926 5.8457 14.2729L6 14.2769C5.37223 13.4412 5 12.4025 5 11.2769V7.27686C5 6.15117 5.37223 5.11255 6 4.27686Z",
    fill: "#000"
  }));
});
Integration.displayName = 'Integration';