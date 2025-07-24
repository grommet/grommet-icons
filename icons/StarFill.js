"use strict";

exports.__esModule = true;
exports.StarFill = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StarFill = exports.StarFill = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StarFill"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0004 1C12.4305 1.00016 12.8124 1.27553 12.9486 1.68359L15.2211 8.5H22.0004C22.4305 8.50016 22.8124 8.77553 22.9486 9.18359C23.0846 9.59181 22.9441 10.0415 22.6 10.2998L17.1996 14.3496L19.9369 21.6484C20.0933 22.0656 19.9545 22.5368 19.597 22.8027C19.2842 23.0352 18.8697 23.0614 18.5336 22.8838L18.3939 22.7959L12.0004 17.9248L5.60681 22.7959C5.2524 23.0659 4.76133 23.0684 4.40368 22.8027C4.04602 22.5368 3.90736 22.0657 4.06384 21.6484L6.80017 14.3496L1.40075 10.2998C1.05641 10.0415 0.916008 9.59194 1.05212 9.18359C1.18835 8.77547 1.57008 8.5 2.00036 8.5H8.77966L11.0521 1.68359L11.1136 1.53711C11.2839 1.21089 11.6238 1 12.0004 1Z",
    fill: "#000"
  }));
});
StarFill.displayName = 'StarFill';