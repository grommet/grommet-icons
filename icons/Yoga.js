"use strict";

exports.__esModule = true;
exports.Yoga = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Yoga = exports.Yoga = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Yoga"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.2929 1.29314C12.6834 0.902613 13.3164 0.902613 13.7069 1.29314C14.0974 1.68366 14.0975 2.31669 13.7069 2.7072L9.99991 6.41423V8.63493C10.0046 8.63767 10.0099 8.63993 10.0146 8.64275L12.5097 10.1398L15.996 12.132C16.3076 12.31 16.4999 12.6413 16.4999 13.0002V17.9787L21.0732 21.1808C21.5255 21.4975 21.6358 22.121 21.3193 22.5734C21.0026 23.0257 20.3791 23.136 19.9267 22.8195L15.0097 19.3771L11.7958 18.0002H10.4999C10.4145 18.0002 10.3313 17.9867 10.2509 17.966C10.1706 17.9868 10.0868 18.0002 9.99991 18.0002H6.56632L3.85734 22.5148C3.57311 22.9882 2.95875 23.1417 2.48527 22.8576C2.01185 22.5734 1.85849 21.959 2.14249 21.4855L5.14249 16.4855L5.21671 16.3781C5.40487 16.1411 5.69265 16.0002 5.99991 16.0002H8.6132L8.05167 14.3166C8.0177 14.2147 7.99993 14.1076 7.99991 14.0002V6.00017C7.99991 5.73501 8.10542 5.48066 8.29288 5.29314L12.2929 1.29314ZM12.0536 14.0002L12.8056 16.258L14.4999 16.9836V13.5802L12.5624 12.4728L12.0536 14.0002Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.9999 5.50017C15.1045 5.50017 15.9999 6.3956 15.9999 7.50017C15.9998 8.60467 15.1044 9.50017 13.9999 9.50017C12.8954 9.50012 12 8.60464 11.9999 7.50017C11.9999 6.39563 12.8954 5.50022 13.9999 5.50017Z",
    fill: "#000"
  }));
});
Yoga.displayName = 'Yoga';