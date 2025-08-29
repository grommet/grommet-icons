"use strict";

exports.__esModule = true;
exports.Star = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Star = exports.Star = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Star"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.0004 1C12.4305 1.00016 12.8124 1.27553 12.9486 1.68359L15.2211 8.5H22.0004C22.4305 8.50016 22.8124 8.77553 22.9486 9.18359C23.0846 9.59181 22.9441 10.0415 22.6 10.2998L17.1996 14.3496L19.9369 21.6484C20.0933 22.0656 19.9545 22.5368 19.597 22.8027C19.2395 23.0685 18.7484 23.0658 18.3939 22.7959L12.0004 17.9248L5.60681 22.7959C5.2524 23.0659 4.76133 23.0684 4.40368 22.8027C4.04602 22.5368 3.90736 22.0657 4.06384 21.6484L6.80017 14.3496L1.40075 10.2998C1.05641 10.0415 0.916008 9.59194 1.05212 9.18359C1.18835 8.77547 1.57008 8.5 2.00036 8.5H8.77966L11.0521 1.68359L11.1136 1.53711C11.2839 1.21089 11.6238 1 12.0004 1ZM10.4486 9.81641C10.3124 10.2245 9.93054 10.4998 9.50036 10.5H4.99939L8.59997 13.2002C8.95504 13.4667 9.09271 13.9359 8.93689 14.3516L7.15564 19.0986L11.3939 15.8711L11.5345 15.7822C11.8742 15.6034 12.2936 15.6325 12.6068 15.8711L16.8441 19.0986L15.0638 14.3516C14.9079 13.9357 15.0455 13.4667 15.4008 13.2002L19.0013 10.5H14.5004C14.0701 10.5 13.6884 10.2245 13.5521 9.81641L12.0004 5.16113L10.4486 9.81641Z",
    fill: "#000"
  }));
});
Star.displayName = 'Star';