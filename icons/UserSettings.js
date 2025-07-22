"use strict";

exports.__esModule = true;
exports.UserSettings = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var UserSettings = exports.UserSettings = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "UserSettings"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "none",
    stroke: "#000",
    strokeWidth: "2",
    d: "M18 21c-1.655 0-3-1.346-3-3s1.345-3 3-3c1.654 0 3 1.346 3 3s-1.346 3-3 3zm6-3h-3 3zm-3.879 2.122 2.121 2.12-2.12-2.12zM18.001 24v-3 3zm-4.244-1.757 2.121-2.122-2.12 2.122zM12 18h3-3zm3.878-2.121-2.12-2.121 2.12 2.12zm2.122-.88v-3 3zm2.121.88 2.121-2.121-2.12 2.12zM12.5 12.5C11.266 11.446 9.775 11 8 11c-3.866 0-7 2.03-7 7v5h10M8 11A5 5 0 1 0 8 1a5 5 0 0 0 0 10z"
  }));
});
UserSettings.displayName = 'UserSettings';