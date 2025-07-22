"use strict";

exports.__esModule = true;
exports.HelpOption = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var HelpOption = exports.HelpOption = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "HelpOption"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7zm5-3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5c-1.448 0-2 1.052-2 1.5a1 1 0 1 1-2 0c0-1.552 1.448-3.5 4-3.5 1.156 0 2.17.289 2.909.935C15.664 7.096 16 8.017 16 9c0 1.188-.306 2.028-.882 2.668a4.313 4.313 0 0 1-.828.693 14.92 14.92 0 0 1-.368.235l-.018.011c-.124.078-.236.15-.347.223-.35.236-.493.412-.55.526-.046.088-.077.205-.028.438a1 1 0 0 1-1.958.412c-.126-.6-.083-1.197.204-1.759.273-.535.718-.942 1.218-1.277.14-.094.277-.18.399-.257l.009-.006c.122-.076.228-.142.328-.21.205-.136.346-.25.453-.368.174-.193.368-.516.368-1.329 0-.517-.164-.846-.409-1.06-.261-.229-.747-.44-1.591-.44zm0 8.281a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",
    fill: "#000"
  }));
});
HelpOption.displayName = 'HelpOption';