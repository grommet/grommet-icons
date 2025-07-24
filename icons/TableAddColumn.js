"use strict";

exports.__esModule = true;
exports.TableAddColumn = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var TableAddColumn = exports.TableAddColumn = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "TableAddColumn"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M20 16C20.5523 16 21 16.4477 21 17V19H23C23.5523 19 24 19.4477 24 20C24 20.5523 23.5523 21 23 21H21V23C21 23.5523 20.5523 24 20 24C19.4477 24 19 23.5523 19 23V21H17C16.4477 21 16 20.5523 16 20C16 19.4477 16.4477 19 17 19H19V17C19 16.4477 19.4477 16 20 16Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18 1C20.7614 1 23 3.23858 23 6V11C23 11.5523 22.5523 12 22 12C21.4477 12 21 11.5523 21 11V8H13V13.5C13 14.0523 12.5523 14.5 12 14.5C11.4477 14.5 11 14.0523 11 13.5V8H8V18C8 18.5523 7.55228 19 7 19C6.44772 19 6 18.5523 6 18V8H3V18C3 19.6569 4.34315 21 6 21H9.5C10.0523 21 10.5 21.4477 10.5 22C10.5 22.5523 10.0523 23 9.5 23H6C3.23858 23 1 20.7614 1 18V6C1 3.23858 3.23858 1 6 1H18ZM6 3C4.39489 3 3.08421 4.26055 3.00391 5.8457L3 6H21C21 4.34315 19.6569 3 18 3H6Z",
    fill: "#000"
  }));
});
TableAddColumn.displayName = 'TableAddColumn';