"use strict";

exports.__esModule = true;
exports.CreditCard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var CreditCard = exports.CreditCard = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CreditCard"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.75 15C7.44036 15 8 15.5596 8 16.25C8 16.9404 7.44036 17.5 6.75 17.5H5.25C4.55964 17.5 4 16.9404 4 16.25C4 15.5596 4.55964 15 5.25 15H6.75Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15.75 15C16.4404 15 17 15.5596 17 16.25C17 16.9404 16.4404 17.5 15.75 17.5H10.25C9.55964 17.5 9 16.9404 9 16.25C9 15.5596 9.55964 15 10.25 15H15.75Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20 3C21.6569 3 23 4.34315 23 6V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V6C1 4.34315 2.34315 3 4 3H20ZM3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V11H3V18ZM4 5C3.44772 5 3 5.44772 3 6V7H21V6C21 5.44772 20.5523 5 20 5H4Z",
    fill: "#000"
  }));
});
CreditCard.displayName = 'CreditCard';