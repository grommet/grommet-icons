"use strict";

exports.__esModule = true;
exports.Contract = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Contract = exports.Contract = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Contract"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10.0001 13.0002C10.2653 13.0002 10.5196 13.1056 10.7071 13.2931C10.8946 13.4807 11.0001 13.735 11.0001 14.0002V20.0002C11.0001 20.5524 10.5523 21.0001 10.0001 21.0002C9.44784 21.0002 9.00014 20.5524 9.00011 20.0002V16.4142L2.70714 22.7072C2.31664 23.0977 1.68361 23.0976 1.29308 22.7072C0.902552 22.3167 0.902552 21.6837 1.29308 21.2931L7.58604 15.0002H4.00011C3.44784 15.0002 3.00014 14.5524 3.00011 14.0002C3.00011 13.4479 3.44782 13.0002 4.00011 13.0002H10.0001Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21.2931 1.29313C21.6836 0.902625 22.3166 0.902609 22.7071 1.29313C23.0976 1.68365 23.0976 2.31669 22.7071 2.70719L16.4142 9.00016H20.0001C20.5523 9.00021 21.0001 9.4479 21.0001 10.0002C21.0001 10.5524 20.5523 11.0001 20.0001 11.0002H14.0001C13.4478 11.0002 13.0001 10.5524 13.0001 10.0002V4.00016C13.0001 3.44787 13.4478 3.00016 14.0001 3.00016C14.5523 3.00021 15.0001 3.4479 15.0001 4.00016V7.58609L21.2931 1.29313Z",
    fill: "#000"
  }));
});
Contract.displayName = 'Contract';