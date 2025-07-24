"use strict";

exports.__esModule = true;
exports.ChapterPrevious = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ChapterPrevious = exports.ChapterPrevious = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ChapterPrevious"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3 10.7637L13.4121 3.19141C13.7163 2.97026 14.119 2.93774 14.4541 3.1084C14.7892 3.27909 15 3.6239 15 4V8.04395L22.4141 2.68945C22.7184 2.46964 23.1208 2.43855 23.4551 2.60938C23.7894 2.78034 24 3.12447 24 3.5V20C24 20.3688 23.7968 20.7078 23.4717 20.8818C23.1466 21.0557 22.7521 21.0366 22.4453 20.832L15 15.8682V20C15 20.3761 14.7892 20.7209 14.4541 20.8916C14.119 21.0623 13.7163 21.0297 13.4121 20.8086L3 13.2354V22H1V2H3V10.7637ZM14.5859 10.8105C14.2816 11.0304 13.8792 11.0614 13.5449 10.8906C13.2106 10.7197 13 10.3755 13 10V5.96289L4.69922 12L13 18.0361V14C13 13.6312 13.2032 13.2922 13.5283 13.1182C13.8534 12.9443 14.2479 12.9634 14.5547 13.168L22 18.1309V5.45508L14.5859 10.8105Z",
    fill: "#000"
  }));
});
ChapterPrevious.displayName = 'ChapterPrevious';