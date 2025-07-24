"use strict";

exports.__esModule = true;
exports.StatusCritical = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var StatusCritical = exports.StatusCritical = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "StatusCritical"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.2934 9.74689C13.6839 9.35644 14.3169 9.35639 14.7074 9.74689C15.0976 10.1374 15.0978 10.7705 14.7074 11.161L13.4144 12.4539L14.7074 13.7469C15.0976 14.1374 15.0978 14.7705 14.7074 15.161C14.317 15.5514 13.6839 15.5512 13.2934 15.161L12.0004 13.868L10.7074 15.161C10.317 15.5514 9.6839 15.5512 9.29335 15.161C8.90283 14.7704 8.90283 14.1374 9.29335 13.7469L10.5863 12.4539L9.29335 11.161C8.90283 10.7704 8.90283 10.1374 9.29335 9.74689C9.68388 9.35644 10.3169 9.35639 10.7074 9.74689L12.0004 11.0399L13.2934 9.74689Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M9.99062 3.05451C11.1683 1.99043 12.9865 2.02597 14.1215 3.16095L21.2934 10.3319C22.4648 11.5034 22.4647 13.4034 21.2934 14.575L14.1215 21.7469C12.9866 22.8816 11.1682 22.9171 9.99062 21.8533L9.87831 21.7469L2.70741 14.575C1.53584 13.4034 1.53584 11.5034 2.70741 10.3319L9.87831 3.16095L9.99062 3.05451ZM12.7074 4.57502C12.317 4.18457 11.6839 4.18471 11.2934 4.57502L4.12148 11.7469C3.7311 12.1374 3.731 12.7705 4.12148 13.161L11.2934 20.3319C11.6839 20.7224 12.3169 20.7224 12.7074 20.3319L19.8783 13.161C20.2688 12.7704 20.2688 12.1374 19.8783 11.7469L12.7074 4.57502Z",
    fill: "#000"
  }));
});
StatusCritical.displayName = 'StatusCritical';