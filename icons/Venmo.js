"use strict";

exports.__esModule = true;
exports.Venmo = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Venmo = exports.Venmo = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var prefix = (0, _utils.generatePrefix)('Venmo');
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Venmo"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#008CFF",
    fillRule: "evenodd",
    d: "M24 12c0 6.628-5.372 12-12 12-6.627 0-12-5.372-12-12C0 5.373 5.373 0 12 0c6.628 0 12 5.373 12 12Zm-5.982-3.571c0-1-.21-1.79-.677-2.558l-4.035.814c.256.535.42 1.185.42 2.14 0 1.744-1.237 4.303-2.24 5.93L10.413 6.15l-4.431.42 2.03 12.094h5.06c2.216-2.907 4.946-7.047 4.946-10.234Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
Venmo.displayName = 'Venmo';