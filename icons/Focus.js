"use strict";

exports.__esModule = true;
exports.Focus = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Focus = exports.Focus = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Focus"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M1 18V15.7139C1.00023 15.1618 1.44785 14.7139 2 14.7139C2.55215 14.7139 2.99977 15.1618 3 15.7139V18C3 19.6569 4.34315 21 6 21H8.28613L8.3877 21.0049C8.89209 21.056 9.28613 21.4821 9.28613 22C9.28613 22.5179 8.89209 22.944 8.3877 22.9951L8.28613 23H6C3.23858 23 1 20.7614 1 18ZM21 18V15.7139C21.0002 15.1618 21.4479 14.7139 22 14.7139C22.5521 14.7139 22.9998 15.1618 23 15.7139V18C23 20.7614 20.7614 23 18 23H15.7139C15.1618 22.9998 14.7139 22.5521 14.7139 22C14.7139 21.4479 15.1618 21.0002 15.7139 21H18C19.6569 21 21 19.6569 21 18ZM1 8.28613V6C1 3.23858 3.23858 1 6 1H8.28613L8.3877 1.00488C8.89209 1.05596 9.28613 1.48213 9.28613 2C9.28613 2.51787 8.89209 2.94404 8.3877 2.99512L8.28613 3H6C4.34315 3 3 4.34315 3 6V8.28613C2.99977 8.83823 2.55215 9.28613 2 9.28613C1.44785 9.28613 1.00023 8.83823 1 8.28613ZM21 8.28613V6C21 4.34315 19.6569 3 18 3H15.7139C15.1618 2.99977 14.7139 2.55215 14.7139 2C14.7139 1.44785 15.1618 1.00023 15.7139 1H18C20.7614 1 23 3.23858 23 6V8.28613C22.9998 8.83823 22.5521 9.28613 22 9.28613C21.4479 9.28613 21.0002 8.83823 21 8.28613Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12Z",
    fill: "#000"
  }));
});
Focus.displayName = 'Focus';