"use strict";

exports.__esModule = true;
exports.Filter = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Filter = exports.Filter = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Filter"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.6426 1C21.4966 1 23 2.50339 23 4.35742C22.9999 5.24757 22.646 6.10101 22.0166 6.73047L16.1006 12.6465C15.5381 13.209 15.2228 13.9721 15.2227 14.7676V19.7773C15.2227 21.5569 13.7796 23 12 23C10.2204 23 8.77734 21.5569 8.77734 19.7773V14.7676C8.77724 13.9721 8.46188 13.209 7.89941 12.6465L1.9834 6.73047C1.35398 6.10101 1.00011 5.24757 1 4.35742C1 2.50339 2.50339 1 4.35742 1H19.6426ZM4.35742 3C3.60796 3 3 3.60796 3 4.35742C3.00011 4.71714 3.14312 5.06202 3.39746 5.31641L9.31348 11.2324C10.251 12.17 10.7772 13.4417 10.7773 14.7676V19.7773C10.7773 20.4524 11.325 21 12 21C12.675 21 13.2227 20.4524 13.2227 19.7773V14.7676C13.2228 13.4417 13.749 12.17 14.6865 11.2324L20.6025 5.31641L20.6924 5.2168C20.8902 4.97542 20.9999 4.6722 21 4.35742C21 3.60796 20.392 3 19.6426 3H4.35742Z",
    fill: "#000"
  }));
});
Filter.displayName = 'Filter';