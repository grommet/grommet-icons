"use strict";

exports.__esModule = true;
exports.Help = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Help = exports.Help = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Help"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0005 19C13.1048 19.0003 14.0005 19.8956 14.0005 21C14.0005 22.1044 13.1048 22.9997 12.0005 23C10.8959 23 10.0005 22.1046 10.0005 21C10.0005 19.8954 10.8959 19 12.0005 19Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0005 1C15.8528 1.00026 19.0005 3.99809 19.0005 8C19.0005 10.8019 17.0822 12.314 15.5552 13.332C14.7282 13.8834 14.086 14.2512 13.5776 14.6748C13.0878 15.083 13.0005 15.3275 13.0005 15.5V16C13.0005 16.5521 12.5525 16.9997 12.0005 17C11.4482 17 11.0005 16.5523 11.0005 16V15.5C11.0005 14.4225 11.6624 13.6669 12.2974 13.1377C12.9139 12.624 13.772 12.1165 14.4448 11.668C15.9177 10.686 17.0005 9.69785 17.0005 8C17.0005 5.12939 14.7751 3.00026 12.0005 3C9.60375 3 7.56195 4.7742 7.09815 7.18848C6.994 7.73077 6.46954 8.08645 5.92726 7.98242C5.38495 7.87826 5.02927 7.35382 5.13331 6.81152C5.76482 3.52354 8.57669 1 12.0005 1Z",
    fill: "#000"
  }));
});
Help.displayName = 'Help';