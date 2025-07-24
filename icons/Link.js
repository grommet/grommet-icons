"use strict";

exports.__esModule = true;
exports.Link = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Link = exports.Link = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Link"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M7.29286 10.2923C7.68326 9.90223 8.31647 9.90231 8.70692 10.2923C9.09733 10.6827 9.0971 11.3158 8.70692 11.7063L5.20692 15.2063C4.21689 16.1964 4.21719 17.802 5.20692 18.7923C6.19711 19.7824 7.80267 19.7824 8.79286 18.7923L12.2929 15.2923C12.6833 14.9022 13.3165 14.9023 13.7069 15.2923C14.0973 15.6827 14.0971 16.3158 13.7069 16.7063L10.2069 20.2063C8.43569 21.9776 5.5641 21.9776 3.79286 20.2063C2.02208 18.435 2.02178 15.5633 3.79286 13.7923L7.29286 10.2923Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M14.2929 8.29226C14.6833 7.90223 15.3165 7.9023 15.7069 8.29226C16.0973 8.68267 16.0971 9.31577 15.7069 9.70632L9.70692 15.7063C9.3164 16.0968 8.68338 16.0968 8.29286 15.7063C7.90279 15.3158 7.90249 14.6826 8.29286 14.2923L14.2929 8.29226Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.9628 3.6321C15.7431 2.02395 18.4911 2.07694 20.2069 3.79226C21.978 5.56338 21.9778 8.43506 20.2069 10.2063L16.7069 13.7063C16.3164 14.0968 15.6834 14.0968 15.2929 13.7063C14.9028 13.3158 14.9025 12.6826 15.2929 12.2923L18.7929 8.79226C19.7827 7.80204 19.7829 6.19639 18.7929 5.20632C17.8027 4.2167 16.197 4.21663 15.2069 5.20632L11.7069 8.70632C11.3164 9.09685 10.6834 9.09685 10.2929 8.70632C9.90279 8.31576 9.90249 7.68263 10.2929 7.29226L13.7929 3.79226L13.9628 3.6321Z",
    fill: "#000"
  }));
});
Link.displayName = 'Link';