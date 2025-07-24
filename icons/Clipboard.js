"use strict";

exports.__esModule = true;
exports.Clipboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Clipboard = exports.Clipboard = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Clipboard"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M3 18.0024V8.00244C3 6.40793 3.17207 5.01006 4.08984 4.09229C5.00761 3.17451 6.40549 3.00244 8 3.00244V5.00244C6.38537 5.00244 5.78385 5.2264 5.50391 5.50635C5.22396 5.78629 5 6.38782 5 8.00244V18.0024C5 19.6171 5.22396 20.2186 5.50391 20.4985C5.78385 20.7785 6.38537 21.0024 8 21.0024H16C17.6146 21.0024 18.2161 20.7785 18.4961 20.4985C18.776 20.2186 19 19.6171 19 18.0024V8.00244C19 6.38782 18.776 5.78629 18.4961 5.50635C18.2161 5.2264 17.6146 5.00244 16 5.00244V3.00244C17.5945 3.00244 18.9924 3.17451 19.9102 4.09229C20.8279 5.01006 21 6.40793 21 8.00244V18.0024C21 19.597 20.8279 20.9948 19.9102 21.9126C18.9924 22.8304 17.5945 23.0024 16 23.0024H8C6.40549 23.0024 5.00761 22.8304 4.08984 21.9126C3.17207 20.9948 3 19.597 3 18.0024Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M9 3V5H15V3H9ZM17 5C17 6.10457 16.1046 7 15 7H9C7.89543 7 7 6.10457 7 5V3C7 1.89543 7.89543 1 9 1H15C16.1046 1 17 1.89543 17 3V5Z",
    fill: "#000"
  }));
});
Clipboard.displayName = 'Clipboard';