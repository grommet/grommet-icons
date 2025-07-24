"use strict";

exports.__esModule = true;
exports.MapOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var MapOption = exports.MapOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "MapOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.748 1.74223C15.9811 1.68154 16.2298 1.70672 16.4473 1.81548L22.4473 4.81548C22.786 4.98486 23 5.33125 23 5.71001V22.71C23 23.0566 22.8202 23.3784 22.5254 23.5606C22.2306 23.7427 21.8626 23.7595 21.5527 23.6045L15.9424 20.7989L8.35156 23.6465C8.0912 23.7442 7.80145 23.7289 7.55273 23.6045L1.55273 20.6045C1.21396 20.4351 1 20.0888 1 19.71V2.71001L1.00781 2.5811C1.04627 2.28494 1.21673 2.0188 1.47461 1.85942C1.76938 1.67736 2.13736 1.66053 2.44727 1.81548L8.05664 4.62016L15.6484 1.77348L15.748 1.74223ZM9 6.40337V21.2666L15 19.0166V4.15337L9 6.40337ZM3 19.0918L7 21.0918V6.32817L3 4.32817V19.0918ZM17 19.0918L21 21.0918V6.32817L17 4.32817V19.0918Z",
    fill: "#000"
  }));
});
MapOption.displayName = 'MapOption';