"use strict";

exports.__esModule = true;
exports.Aruba = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Aruba = exports.Aruba = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Aruba"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.11 17.3016C9.03598 17.3016 6.50849 14.8424 6.50849 11.8367C6.50849 8.83105 9.03598 6.37187 12.11 6.37187C15.1839 6.37187 17.7114 8.83105 17.7114 11.8367C17.7114 14.8424 15.1839 17.3016 12.11 17.3016ZM12.11 2C6.50849 2 2 6.44018 2 11.8367C2 17.3016 6.50849 21.6734 12.11 21.6734C14.4325 21.6734 16.5501 20.922 18.2579 19.6241C19.2826 21.3319 22.2199 21.6734 22.2199 21.6734V11.8367C22.2199 6.44018 17.7114 2 12.11 2Z",
    fill: "#FF8300"
  }));
});
Aruba.displayName = 'Aruba';