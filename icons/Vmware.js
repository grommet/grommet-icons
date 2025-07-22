"use strict";

exports.__esModule = true;
exports.Vmware = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Vmware = exports.Vmware = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Vmware"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#879AC3",
    fillRule: "evenodd",
    d: "M5.574 0c-.959 0-1.728.754-1.728 1.68v5.744H1.728C.77 7.424 0 8.18 0 9.104v12.438c0 .926.77 1.68 1.728 1.68H14.58c.96 0 1.753-.754 1.753-1.68v-2.045h5.939c.958 0 1.728-.757 1.728-1.68V5.38c0-.924-.77-1.655-1.728-1.655h-2.118V1.68c0-.926-.771-1.68-1.728-1.68H5.574zm0 .95h12.852c.42 0 .755.323.755.73v2.044H9.42c-.957 0-1.753.731-1.753 1.655v2.045H4.82V1.68c0-.407.332-.73.755-.73zm3.846 3.7h9.76v9.443a.759.759 0 0 1-.754.755h-2.093V9.103c0-.923-.794-1.68-1.753-1.68H8.641V5.38c0-.406.36-.73.779-.73zm10.734 0h2.118c.42 0 .754.323.754.73v12.437c0 .406-.334.73-.754.73h-5.94v-2.75h2.094c.957 0 1.728-.778 1.728-1.704V4.65zM1.728 8.372h2.118v5.72c0 .926.769 1.704 1.728 1.704h2.093v2.02c0 .923.796 1.68 1.753 1.68h5.939v2.045c0 .406-.356.73-.779.73H1.728a.735.735 0 0 1-.754-.73V9.103c0-.405.329-.73.754-.73zm3.091 0h2.848v6.475H5.574a.757.757 0 0 1-.755-.755v-5.72zm3.822 0h5.94c.422 0 .778.325.778.73v5.745H8.641V8.373zm0 7.424h6.718v2.75h-5.94c-.419 0-.778-.324-.778-.73v-2.02z"
  }));
});
Vmware.displayName = 'Vmware';