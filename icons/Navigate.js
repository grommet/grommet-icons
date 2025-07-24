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
    d: "M12 1.70996C12.5523 1.70997 13 2.15768 13 2.70996V6.70996H20C20.3344 6.70996 20.6466 6.87708 20.8321 7.15527L22.8321 10.1553C23.056 10.4912 23.056 10.9288 22.8321 11.2646L20.8321 14.2646C20.6466 14.5428 20.3344 14.71 20 14.71H13V22.71H11V11.71H4.00004C3.66569 11.71 3.35348 11.5428 3.16801 11.2646L1.16801 8.26465C0.944078 7.92875 0.944078 7.49117 1.16801 7.15527L3.16801 4.15527L3.24321 4.05664C3.43179 3.83813 3.70737 3.70996 4.00004 3.70996H11V2.70996C11 2.15768 11.4478 1.70996 12 1.70996ZM13 12.71H19.4649L20.7979 10.71L19.4649 8.70996H13V12.71ZM3.20121 7.70996L4.5352 9.70996H11V5.70996H4.5352L3.20121 7.70996Z",
    fill: "#000"
  }));
});
Navigate.displayName = 'Navigate';