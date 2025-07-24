"use strict";

exports.__esModule = true;
exports.Host = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Host = exports.Host = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Host"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6 6.27686H5V4.27686H6V6.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V18.2769C23 19.9337 21.6569 21.2769 20 21.2769H22C22.5523 21.2769 23 21.7246 23 22.2769C23 22.8291 22.5523 23.2769 22 23.2769H2C1.44772 23.2769 1 22.8291 1 22.2769C1 21.7246 1.44772 21.2769 2 21.2769H4C2.34315 21.2769 1 19.9337 1 18.2769V4.27686C1 2.62 2.34315 1.27686 4 1.27686H20ZM3 18.2769C3 18.8291 3.44772 19.2769 4 19.2769H20C20.5523 19.2769 21 18.8291 21 18.2769V15.2769H3V18.2769ZM3 13.2769H21V9.27686H3V13.2769ZM4 3.27686C3.44772 3.27686 3 3.72457 3 4.27686V7.27686H21V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H4Z",
    fill: "#000"
  }));
});
Host.displayName = 'Host';