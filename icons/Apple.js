"use strict";

exports.__esModule = true;
exports.Apple = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Apple = exports.Apple = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Apple"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M15.3007 3.832C16.1387 2.818 16.7027 1.405 16.5487 0C15.3407 0.049 13.8797 0.805 13.0137 1.819C12.2367 2.717 11.5567 4.154 11.7407 5.531C13.0867 5.636 14.4627 4.847 15.3007 3.832ZM18.3207 12.75C18.3547 16.382 21.5067 17.591 21.5417 17.607C21.5157 17.692 21.0387 19.329 19.8807 21.02C18.8807 22.482 17.8427 23.939 16.2067 23.969C14.5997 23.998 14.0837 23.016 12.2457 23.016C10.4097 23.016 9.8357 23.939 8.3137 23.998C6.7357 24.058 5.5337 22.417 4.5247 20.961C2.4637 17.981 0.888701 12.541 3.0037 8.869C4.0547 7.045 5.9317 5.89 7.9697 5.861C9.5197 5.831 10.9827 6.904 11.9307 6.904C12.8777 6.904 14.6557 5.614 16.5247 5.803C17.3077 5.836 19.5037 6.119 20.9147 8.184C20.8007 8.254 18.2937 9.714 18.3207 12.75Z",
    fill: "#AAAAAA"
  }));
});
Apple.displayName = 'Apple';