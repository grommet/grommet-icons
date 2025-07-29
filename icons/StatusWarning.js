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
    d: "M12.0001 16.0009C12.5523 16.0009 13.0001 16.4486 13.0001 17.0009V17.1005C12.9999 17.6525 12.5522 18.1004 12.0001 18.1005C11.4479 18.1005 11.0003 17.6526 11.0001 17.1005V17.0009C11.0001 16.4486 11.4478 16.0009 12.0001 16.0009Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12.0001 9.00087C12.5523 9.00092 13.0001 9.44861 13.0001 10.0009V14.0009C12.9996 14.5528 12.5521 15.0008 12.0001 15.0009C11.4481 15.0009 11.0005 14.5528 11.0001 14.0009V10.0009C11.0001 9.44859 11.4478 9.00088 12.0001 9.00087Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.31648 4.13075C10.4221 1.91965 13.5781 1.91962 14.6837 4.13075L21.4473 17.6591C22.4441 19.6537 20.9937 22.0009 18.7637 22.0009H5.2364C3.00646 22.0009 1.55596 19.6537 2.55281 17.6591L9.31648 4.13075ZM12.8946 5.02528C12.5492 4.33447 11.6034 4.29123 11.1827 4.8954L11.1055 5.02528L4.34187 18.5536C4.00992 19.2184 4.49322 20.0009 5.2364 20.0009H18.7637C19.5069 20.0009 19.9902 19.2184 19.6583 18.5536L12.8946 5.02528Z",
    fill: "#000"
  }));
});
StatusWarning.displayName = 'StatusWarning';