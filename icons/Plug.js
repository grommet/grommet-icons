"use strict";

exports.__esModule = true;
exports.Plug = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Plug = exports.Plug = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Plug"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1.27686C15.5523 1.27686 16 1.72457 16 2.27686V5.27686H19V11.2769C19 14.0383 16.7614 16.2769 14 16.2769H13V22.2769H11V16.2769H10C7.23858 16.2769 5 14.0383 5 11.2769V5.27686H8V2.27686C8 1.72457 8.44772 1.27686 9 1.27686C9.55228 1.27686 10 1.72457 10 2.27686V5.27686H14V2.27686C14 1.72457 14.4477 1.27686 15 1.27686ZM7 11.2769C7 12.9337 8.34315 14.2769 10 14.2769H14C15.6569 14.2769 17 12.9337 17 11.2769V7.27686H7V11.2769Z",
    fill: "#000"
  }));
});
Plug.displayName = 'Plug';