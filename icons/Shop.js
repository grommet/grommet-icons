"use strict";

exports.__esModule = true;
exports.Shop = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Shop = exports.Shop = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Shop"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.70996C14.7614 1.70996 17 3.94854 17 6.70996V7.70996H22C22.5523 7.70996 23 8.15768 23 8.70996V19.71C23 21.9191 21.2091 23.71 19 23.71H5C2.79086 23.71 1 21.9191 1 19.71V8.70996C1 8.15768 1.44772 7.70996 2 7.70996H7V6.70996C7 3.94854 9.23858 1.70996 12 1.70996ZM3 19.71C3 20.8145 3.89543 21.71 5 21.71H19C20.1046 21.71 21 20.8145 21 19.71V9.70996H3V19.71ZM12 3.70996C10.3431 3.70996 9 5.05311 9 6.70996V7.70996H15V6.70996C15 5.05311 13.6569 3.70996 12 3.70996Z",
    fill: "#000"
  }));
});
Shop.displayName = 'Shop';