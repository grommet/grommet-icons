"use strict";

exports.__esModule = true;
exports.Domain = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Domain = exports.Domain = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Domain"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13 4.27686C13.5523 4.27686 14 4.72457 14 5.27686V5.28662C14 5.83891 13.5523 6.28662 13 6.28662C12.4477 6.28662 12 5.83891 12 5.28662V5.27686C12 4.72457 12.4477 4.27686 13 4.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16 4.27686C16.5523 4.27686 17 4.72457 17 5.27686V5.28662C17 5.83891 16.5523 6.28662 16 6.28662C15.4477 6.28662 15 5.83891 15 5.28662V5.27686C15 4.72457 15.4477 4.27686 16 4.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M19 4.27686C19.5523 4.27686 20 4.72457 20 5.27686V5.28662C20 5.83891 19.5523 6.28662 19 6.28662C18.4477 6.28662 18 5.83891 18 5.28662V5.27686C18 4.72457 18.4477 4.27686 19 4.27686Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 1.27686C21.6569 1.27686 23 2.62 23 4.27686V20.2769C23 21.9337 21.6569 23.2769 20 23.2769H4C2.34315 23.2769 1 21.9337 1 20.2769V4.27686C1 2.62 2.34315 1.27686 4 1.27686H20ZM4 3.27686C3.44772 3.27686 3 3.72457 3 4.27686V20.2769C3 20.8291 3.44772 21.2769 4 21.2769H20C20.5523 21.2769 21 20.8291 21 20.2769V4.27686C21 3.72457 20.5523 3.27686 20 3.27686H4Z",
    fill: "#000"
  }));
});
Domain.displayName = 'Domain';