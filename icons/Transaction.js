"use strict";

exports.__esModule = true;
exports.Transaction = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Transaction = exports.Transaction = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Transaction"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M6.29307 12.2931C6.68359 11.9026 7.3166 11.9026 7.70713 12.2931C8.09752 12.6837 8.09761 13.3167 7.70713 13.7072L5.41416 16.0002H16.0001C16.5523 16.0002 17.0001 16.4479 17.0001 17.0002C17 17.5524 16.5523 18.0001 16.0001 18.0002H5.41416L7.70713 20.2931C8.09752 20.6837 8.09761 21.3167 7.70713 21.7072C7.31664 22.0977 6.68359 22.0976 6.29307 21.7072L2.29306 17.7072C1.90255 17.3167 1.90256 16.6837 2.29306 16.2931L6.29307 12.2931Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M16.2931 2.29314C16.6836 1.90261 17.3166 1.90261 17.7071 2.29314L21.7071 6.29314C21.8946 6.48066 22.0001 6.73501 22.0001 7.00017C22.0001 7.26533 21.8946 7.5197 21.7071 7.7072L17.7071 11.7072C17.3166 12.0977 16.6836 12.0976 16.2931 11.7072C15.9025 11.3167 15.9026 10.6837 16.2931 10.2931L18.586 8.00017H8.0001C7.44786 8.00017 7.00018 7.55238 7.0001 7.00017C7.0001 6.44788 7.44781 6.00017 8.0001 6.00017H18.586L16.2931 3.7072C15.9025 3.31668 15.9026 2.68366 16.2931 2.29314Z",
    fill: "#000"
  }));
});
Transaction.displayName = 'Transaction';