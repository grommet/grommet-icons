"use strict";

exports.__esModule = true;
exports.Server = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Server = exports.Server = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Server"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 14.2769C12.1046 14.2769 13 15.1723 13 16.2769C13 17.3814 12.1046 18.2769 11 18.2769C9.89543 18.2769 9 17.3814 9 16.2769C9 15.1723 9.89543 14.2769 11 14.2769Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 8.27686C12.5523 8.27686 13 8.72457 13 9.27686C13 9.82914 12.5523 10.2769 12 10.2769H6C5.44772 10.2769 5 9.82914 5 9.27686C5 8.72457 5.44772 8.27686 6 8.27686H12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M12 5.27686C12.5523 5.27686 13 5.72457 13 6.27686C13 6.82914 12.5523 7.27686 12 7.27686H6C5.44772 7.27686 5 6.82914 5 6.27686C5 5.72457 5.44772 5.27686 6 5.27686H12Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12 1.27686C14.7614 1.27686 17 3.51543 17 6.27686V11.813C17.5884 11.4725 18.2712 11.2769 19 11.2769C21.2091 11.2769 23 13.0677 23 15.2769V18.2769C23 19.4719 22.4754 20.5439 21.6445 21.2769H22C22.5523 21.2769 23 21.7246 23 22.2769C23 22.8291 22.5523 23.2769 22 23.2769H2C1.44772 23.2769 1 22.8291 1 22.2769C1 21.7246 1.44772 21.2769 2 21.2769H3C1.78565 20.3646 1 18.9126 1 17.2769V6.27686C1 3.51543 3.23858 1.27686 6 1.27686H12ZM15.7402 20.5933C15.5169 20.8449 15.2694 21.0745 15 21.2769H16.3555C16.1251 21.0736 15.9188 20.8441 15.7402 20.5933ZM6 3.27686C4.34315 3.27686 3 4.62 3 6.27686V17.2769C3 18.9337 4.34315 20.2769 6 20.2769H12C13.6569 20.2769 15 18.9337 15 17.2769V6.27686C15 4.62 13.6569 3.27686 12 3.27686H6ZM19 13.2769C17.8954 13.2769 17 14.1723 17 15.2769V18.2769C17 19.3814 17.8954 20.2769 19 20.2769C20.1046 20.2769 21 19.3814 21 18.2769V15.2769C21 14.1723 20.1046 13.2769 19 13.2769Z",
    fill: "#000"
  }));
});
Server.displayName = 'Server';