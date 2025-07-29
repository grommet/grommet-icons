"use strict";

exports.__esModule = true;
exports.Lounge = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Lounge = exports.Lounge = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Lounge"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M22 8C22.5523 8 23 8.44772 23 9V14C23 16.4189 21.2822 18.4361 19 18.8994V22C19 22.5523 18.5523 23 18 23C17.4477 23 17 22.5523 17 22V19H7V22C7 22.5523 6.55228 23 6 23C5.44772 23 5 22.5523 5 22V18.8994C2.71781 18.4361 1 16.4189 1 14V9C1 8.44772 1.44772 8 2 8C2.55228 8 3 8.44772 3 9V14C3 15.6569 4.34315 17 6 17H18C19.6569 17 21 15.6569 21 14V9C21 8.44772 21.4477 8 22 8Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15 1C17.7614 1 20 3.23858 20 6V14C20 15.1046 19.1046 16 18 16H6C4.89543 16 4 15.1046 4 14V6C4 3.23858 6.23858 1 9 1H15ZM6 14H18V13H6V14ZM9 3C7.34315 3 6 4.34315 6 6V11H18V6C18 4.34315 16.6569 3 15 3H9Z",
    fill: "#000"
  }));
});
Lounge.displayName = 'Lounge';