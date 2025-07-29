"use strict";

exports.__esModule = true;
exports.Youtube = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Youtube = exports.Youtube = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Youtube"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.522 15.553L9.52125 8.80975L16.0058 12.193L9.522 15.553ZM23.76 7.64125C23.76 7.64125 23.5252 5.9875 22.806 5.25925C21.8932 4.303 20.8703 4.2985 20.4015 4.243C17.043 4 12.0052 4 12.0052 4H11.9948C11.9948 4 6.957 4 3.5985 4.243C3.129 4.2985 2.10675 4.303 1.19325 5.25925C0.474 5.9875 0.24 7.64125 0.24 7.64125C0.24 7.64125 0 9.58375 0 11.5255V13.3465C0 15.289 0.24 17.2307 0.24 17.2307C0.24 17.2307 0.474 18.8845 1.19325 19.6127C2.10675 20.569 3.306 20.539 3.84 20.6388C5.76 20.8232 12 20.8803 12 20.8803C12 20.8803 17.043 20.8727 20.4015 20.6297C20.8703 20.5735 21.8932 20.569 22.806 19.6127C23.5252 18.8845 23.76 17.2307 23.76 17.2307C23.76 17.2307 24 15.289 24 13.3465V11.5255C24 9.58375 23.76 7.64125 23.76 7.64125Z",
    fill: "#CD201F"
  }));
});
Youtube.displayName = 'Youtube';