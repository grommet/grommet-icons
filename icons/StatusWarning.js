"use strict";

exports.__esModule = true;
exports.StatusWarning = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StatusWarning = exports.StatusWarning = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StatusWarning"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0001 16.4545C12.5523 16.4545 13.0001 16.9022 13.0001 17.4545V17.5541C12.9999 18.1062 12.5522 18.554 12.0001 18.5541C11.4479 18.5541 11.0003 18.1062 11.0001 17.5541V17.4545C11.0001 16.9022 11.4478 16.4545 12.0001 16.4545Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0001 9.45448C12.5523 9.45453 13.0001 9.90223 13.0001 10.4545V14.4545C12.9996 15.0064 12.5521 15.4544 12.0001 15.4545C11.4481 15.4545 11.0005 15.0064 11.0001 14.4545V10.4545C11.0001 9.90221 11.4478 9.4545 12.0001 9.45448Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.31648 4.58437C10.4221 2.37326 13.5781 2.37323 14.6837 4.58437L21.4473 18.1127C22.4441 20.1073 20.9937 22.4545 18.7637 22.4545H5.2364C3.00646 22.4545 1.55596 20.1073 2.55281 18.1127L9.31648 4.58437ZM12.8946 5.4789C12.5492 4.78808 11.6034 4.74485 11.1827 5.34901L11.1055 5.4789L4.34187 19.0072C4.00992 19.672 4.49322 20.4545 5.2364 20.4545H18.7637C19.5069 20.4545 19.9902 19.672 19.6583 19.0072L12.8946 5.4789Z",
    fill: "#000"
  }));
});
StatusWarning.displayName = 'StatusWarning';