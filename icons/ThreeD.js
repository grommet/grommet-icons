"use strict";

exports.__esModule = true;
exports.ThreeD = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var ThreeD = exports.ThreeD = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "ThreeD"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M18 11C18.5521 11 18.9998 11.4479 19 12V16C18.9998 16.552 18.5521 17 18 17C17.4478 17 17.0002 16.552 17 16V14.7441C15.9989 15.729 14.9859 16.4025 13.9785 16.8222C12.3465 17.5022 10.8105 17.4837 9.50781 17.1582C8.21973 16.8361 7.1649 16.2163 6.44336 15.6923C6.07996 15.4284 5.79275 15.1824 5.59375 15C5.49424 14.9087 5.41545 14.8325 5.36035 14.7773C5.33303 14.7499 5.31083 14.7275 5.29492 14.7109C5.28707 14.7027 5.28038 14.6957 5.27539 14.6904C5.2731 14.6879 5.27118 14.6854 5.26953 14.6835L5.26562 14.6796C5.2655 14.679 5.27638 14.6684 5.75488 14.2265L5.26562 14.6796C4.89115 14.274 4.91587 13.6402 5.32129 13.2656C5.72672 12.8913 6.35866 12.9166 6.7334 13.3212C6.73439 13.3224 6.7363 13.324 6.73926 13.3271C6.74639 13.3345 6.75969 13.3475 6.77734 13.3652C6.81305 13.401 6.86955 13.4569 6.94531 13.5263C7.09783 13.6661 7.32678 13.8619 7.61914 14.0742C8.21 14.5032 9.03077 14.9773 9.99219 15.2177C10.9393 15.4545 12.0289 15.4672 13.209 14.9755C14.0377 14.6302 14.9503 14.0193 15.9082 13H14C13.4478 13 13.0002 12.552 13 12C13.0002 11.4479 13.4479 11 14 11H18Z",
    fill: "#000"
  }), /*#__PURE__*/_react["default"].createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.1426 1.16597C11.3346 0.689144 12.6654 0.689144 13.8574 1.16597L19.8574 3.56636C21.7554 4.32582 23 6.16463 23 8.20893V15.7919C22.9998 17.8361 21.7553 19.6751 19.8574 20.4345L13.8574 22.8349C12.6654 23.3117 11.3346 23.3117 10.1426 22.8349L4.14258 20.4345C2.24467 19.6751 1.00016 17.8361 1 15.7919V8.20893C1 6.16463 2.24463 4.32582 4.14258 3.56636L10.1426 1.16597ZM13.8125 9.86909C12.6469 10.3223 11.3531 10.3223 10.1875 9.86909L3.19434 7.14839C3.06862 7.48102 3 7.8396 3 8.20893V15.7919C3.00016 17.0185 3.74689 18.1225 4.88574 18.5781L10.8857 20.9775C11.6009 21.2635 12.3991 21.2635 13.1143 20.9775L19.1143 18.5781C20.2531 18.1225 20.9998 17.0185 21 15.7919V8.20893C21 7.83948 20.9305 7.48111 20.8047 7.14839L13.8125 9.86909ZM13.1143 3.02339C12.4883 2.773 11.799 2.74175 11.1572 2.92964L10.8857 3.02339L4.88574 5.4228C4.78995 5.46113 4.69746 5.50551 4.60742 5.55268L10.9131 8.00483C11.6121 8.27651 12.3879 8.27651 13.0869 8.00483L19.3916 5.55268C19.3687 5.54071 19.3465 5.527 19.3232 5.51558L19.1143 5.4228L13.1143 3.02339Z",
    fill: "#000"
  }));
});
ThreeD.displayName = 'ThreeD';