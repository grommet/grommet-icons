"use strict";

exports.__esModule = true;
exports.Target = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Target = exports.Target = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Target"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 10C13.1043 10 14 10.8957 14 12C14 13.1043 13.1043 14 12 14C10.8957 14 10 13.1043 10 12C10 10.8957 10.8957 10 12 10Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 5C15.8613 5 19 8.13872 19 12C19 15.8613 15.8613 19 12 19C8.13872 19 5 15.8613 5 12C5 8.13872 8.13872 5 12 5ZM12 7C9.24328 7 7 9.24328 7 12C7 14.7567 9.24328 17 12 17C14.7567 17 17 14.7567 17 12C17 9.24328 14.7567 7 12 7Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 0C18.6273 0 24 5.37272 24 12C24 18.6273 18.6273 24 12 24C5.37272 24 0 18.6273 0 12C0 5.37272 5.37272 0 12 0ZM12 2C6.47728 2 2 6.47728 2 12C2 17.5227 6.47728 22 12 22C17.5227 22 22 17.5227 22 12C22 6.47728 17.5227 2 12 2Z",
    fill: "#000"
  }));
});
Target.displayName = 'Target';