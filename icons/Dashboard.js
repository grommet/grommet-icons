"use strict";

exports.__esModule = true;
exports.Dashboard = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Dashboard = exports.Dashboard = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dashboard"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M15 16.2769C15 14.62 13.6569 13.2769 12 13.2769M12 13.2769C10.3431 13.2769 9 14.62 9 16.2769M12 13.2769V8.75289M5 5.27686L7 7.27686M12 3.27686V5.27686M19 12.2769H21M3 12.2769H5M17 7.27686L19 5.27686M3.4191 17.2769H20.6145M12 22.2769C17.5228 22.2769 22 17.7997 22 12.2769C22 6.75401 17.5228 2.27686 12 2.27686C6.47715 2.27686 2 6.75401 2 12.2769C2 17.7997 6.47715 22.2769 12 22.2769Z",
    stroke: "#000",
    strokeWidth: "2",
    strokeLinecap: "round"
  }));
});
Dashboard.displayName = 'Dashboard';