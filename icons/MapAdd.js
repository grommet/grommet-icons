"use strict";

exports.__esModule = true;
exports.MapAdd = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var MapAdd = exports.MapAdd = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "MapAdd"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 13.71C18.5523 13.71 19 14.1577 19 14.71V17.71H22C22.5523 17.71 23 18.1577 23 18.71C23 19.2623 22.5523 19.71 22 19.71H19V22.71C19 23.2623 18.5523 23.71 18 23.71C17.4477 23.71 17 23.2623 17 22.71V19.71H14C13.4477 19.71 13 19.2623 13 18.71C13 18.1577 13.4477 17.71 14 17.71H17V14.71C17 14.1577 17.4477 13.71 18 13.71Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.748 1.74223C15.9811 1.68154 16.2297 1.70672 16.4473 1.81548L22.4473 4.81548C22.786 4.98486 23 5.33125 23 5.71001V14.21C23 14.7623 22.5523 15.21 22 15.21C21.4477 15.21 21 14.7623 21 14.21V6.32817L17 4.32817V11.21C17 11.7623 16.5523 12.21 16 12.21C15.4477 12.21 15 11.7623 15 11.21V4.15337L9 6.40337V21.2666L11.6484 20.2735C12.1654 20.0796 12.7425 20.3416 12.9365 20.8584C13.1304 21.3755 12.8685 21.9525 12.3516 22.1465L8.35156 23.6465C8.0912 23.7442 7.80145 23.7289 7.55273 23.6045L1.55273 20.6045C1.21396 20.4351 1 20.0888 1 19.71V2.71001L1.00781 2.5811C1.04627 2.28494 1.21673 2.0188 1.47461 1.85942C1.76938 1.67735 2.13736 1.66053 2.44727 1.81548L8.05664 4.62016L15.6484 1.77348L15.748 1.74223ZM3 19.0918L7 21.0918V6.32817L3 4.32817V19.0918Z",
    fill: "#000"
  }));
});
MapAdd.displayName = 'MapAdd';