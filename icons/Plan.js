"use strict";

exports.__esModule = true;
exports.Plan = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Plan = exports.Plan = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Plan"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M21 10.1816H3V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V10.1816ZM5.50977 16C6.06205 16 6.50977 16.4477 6.50977 17C6.50977 17.5523 6.06205 18 5.50977 18H5.5C4.94772 18 4.5 17.5523 4.5 17C4.5 16.4477 4.94772 16 5.5 16H5.50977ZM18.5 16C19.0523 16 19.5 16.4477 19.5 17C19.5 17.5523 19.0523 18 18.5 18H8.5C7.94772 18 7.5 17.5523 7.5 17C7.5 16.4477 7.94772 16 8.5 16H18.5ZM5.50977 12C6.06205 12 6.50977 12.4477 6.50977 13C6.50977 13.5523 6.06205 14 5.50977 14H5.5C4.94772 14 4.5 13.5523 4.5 13C4.5 12.4477 4.94772 12 5.5 12H5.50977ZM18.5 12C19.0523 12 19.5 12.4477 19.5 13C19.5 13.5523 19.0523 14 18.5 14H8.5C7.94772 14 7.5 13.5523 7.5 13C7.5 12.4477 7.94772 12 8.5 12H18.5ZM6 5.63672C4.49773 5.63672 3.2533 6.74057 3.03418 8.18164H20.9658C20.7467 6.74057 19.5023 5.63672 18 5.63672H6ZM23 18C23 20.7614 20.7614 23 18 23H6C3.23858 23 1 20.7614 1 18V8.63672C1 6.02838 2.9973 3.88669 5.5459 3.65723V2C5.5459 1.44772 5.99361 1 6.5459 1C7.09798 1.00024 7.5459 1.44786 7.5459 2V3.63672H16.4541V2C16.4541 1.44786 16.902 1.00024 17.4541 1C18.0064 1 18.4541 1.44772 18.4541 2V3.65723C21.0027 3.88669 23 6.02838 23 8.63672V18Z",
    fill: "#000"
  }));
});
Plan.displayName = 'Plan';