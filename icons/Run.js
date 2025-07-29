"use strict";

exports.__esModule = true;
exports.Run = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Run = exports.Run = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Run"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 5C15.2163 5 15.4265 5.07045 15.5996 5.2002L17.5996 6.7002C18.0296 7.02271 18.1282 7.62739 17.8223 8.06934L16.1113 10.5391L18.5547 12.168C19.0142 12.4743 19.1384 13.0952 18.832 13.5547C18.5257 14.0142 17.9048 14.1384 17.4453 13.832L14.9727 12.1836L13.8643 13.7842L16.5732 15.6807C16.8406 15.8678 17 16.1737 17 16.5V21.5C17 22.0523 16.5523 22.5 16 22.5C15.4477 22.5 15 22.0523 15 21.5V17.0205L10.9678 14.1982L8.84375 17.5371C8.66018 17.8255 8.34185 18 8 18H4C3.44772 18 3 17.5523 3 17C3 16.4477 3.44772 16 4 16H7.45117L13.1777 7H10.5186L10.5 9.50684C10.4961 10.059 10.0453 10.5038 9.49316 10.5C8.94099 10.4961 8.49622 10.0453 8.5 9.49316L8.52539 5.99316L8.53125 5.8916C8.58538 5.38994 9.0101 5 9.52539 5H15Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 2C19.1046 2 20 2.89543 20 4C20 5.10457 19.1046 6 18 6C16.8954 6 16 5.10457 16 4C16 2.89543 16.8954 2 18 2Z",
    fill: "#000"
  }));
});
Run.displayName = 'Run';