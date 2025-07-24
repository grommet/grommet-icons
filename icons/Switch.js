"use strict";

exports.__esModule = true;
exports.Switch = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Switch = exports.Switch = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Switch"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 13.2769C20.7614 13.2769 23 15.5154 23 18.2769C23 21.0383 20.7614 23.2769 18 23.2769H6C3.23858 23.2769 1 21.0383 1 18.2769C1 15.5154 3.23858 13.2769 6 13.2769H18ZM6 15.2769C4.34315 15.2769 3 16.62 3 18.2769C3 19.9337 4.34315 21.2769 6 21.2769C7.65685 21.2769 9 19.9337 9 18.2769C9 16.62 7.65685 15.2769 6 15.2769ZM10 15.2769C10.6278 16.1125 11 17.1512 11 18.2769C11 19.4025 10.6278 20.4412 10 21.2769H18C19.6569 21.2769 21 19.9337 21 18.2769C21 16.62 19.6569 15.2769 18 15.2769H10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1.27686C20.7614 1.27686 23 3.51543 23 6.27686C23 9.03828 20.7614 11.2769 18 11.2769H6C3.23858 11.2769 1 9.03828 1 6.27686C1 3.51543 3.23858 1.27686 6 1.27686H18ZM6 3.27686C4.34315 3.27686 3 4.62 3 6.27686C3 7.93371 4.34315 9.27686 6 9.27686H14C13.3722 8.44116 13 7.40254 13 6.27686C13 5.15117 13.3722 4.11255 14 3.27686H6ZM18 3.27686C16.3431 3.27686 15 4.62 15 6.27686C15 7.93371 16.3431 9.27686 18 9.27686C19.6569 9.27686 21 7.93371 21 6.27686C21 4.62 19.6569 3.27686 18 3.27686Z",
    fill: "#000"
  }));
});
Switch.displayName = 'Switch';