"use strict";

exports.__esModule = true;
exports.Notes = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Notes = exports.Notes = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Notes"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 8V6H6V8H18Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 12V10H6V12H18Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M11 16V14H6V16H11Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.8584 23C13.9635 23 15.0381 22.634 15.9131 21.959L21.0537 17.9932C22.2808 17.0465 22.9999 15.584 23 14.0342V6C23 3.23858 20.7614 1 18 1H6C3.23858 1 1 3.23858 1 6V18C1 20.7614 3.23858 23 6 23H12.8584ZM6 21C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V14H16C14.3431 14 13 15.3431 13 17V20.9941C12.953 20.9964 12.9057 21 12.8584 21H6ZM15 17C15 16.4477 15.4477 16 16 16H20.2637C20.1345 16.1487 19.9908 16.2867 19.832 16.4092L15 20.1367V17Z",
    fill: "#000"
  }));
});
Notes.displayName = 'Notes';