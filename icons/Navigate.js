"use strict";

exports.__esModule = true;
exports.Navigate = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Navigate = exports.Navigate = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Navigate"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1C12.5523 1.00001 13 1.44772 13 2V6H20C20.3344 6 20.6466 6.16712 20.8321 6.44531L22.8321 9.44531C23.056 9.78121 23.056 10.2188 22.8321 10.5547L20.8321 13.5547C20.6466 13.8329 20.3344 14 20 14H13V22H11V11H4.00004C3.66569 11 3.35348 10.8329 3.16801 10.5547L1.16801 7.55469C0.944078 7.21879 0.944078 6.78121 1.16801 6.44531L3.16801 3.44531L3.24321 3.34668C3.43179 3.12817 3.70737 3 4.00004 3H11V2C11 1.44772 11.4478 1 12 1ZM13 12H19.4649L20.7979 10L19.4649 8H13V12ZM3.20121 7L4.5352 9H11V5H4.5352L3.20121 7Z",
    fill: "#000"
  }));
});
Navigate.displayName = 'Navigate';