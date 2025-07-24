"use strict";

exports.__esModule = true;
exports.Save = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Save = exports.Save = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Save"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 1C21.6569 1 23 2.34315 23 4V18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V2C1 1.44772 1.44772 1 2 1C2.55228 1 3 1.44772 3 2V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V4C21 3.44772 20.5523 3 20 3H14C13.4477 3 13 3.44772 13 4V11.6006L14.2891 10.2969C14.6773 9.90429 15.3104 9.90088 15.7031 10.2891C16.0957 10.6773 16.0991 11.3104 15.7109 11.7031L12.7461 14.7031C12.5596 14.8918 12.3053 14.9985 12.04 15C11.8081 15.0012 11.584 14.922 11.4053 14.7773L11.332 14.7109L8.29688 11.7109C7.90427 11.3226 7.90084 10.6896 8.28906 10.2969C8.67735 9.90427 9.31042 9.90084 9.70312 10.2891L11 11.5713V4C11 2.34315 12.3431 1 14 1H20Z",
    fill: "#000"
  }));
});
Save.displayName = 'Save';