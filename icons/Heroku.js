"use strict";

exports.__esModule = true;
exports.Heroku = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Heroku = exports.Heroku = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Heroku"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#6762A6",
    fillRule: "evenodd",
    d: "M20.443 0H3.162A2.162 2.162 0 0 0 1 2.162V21.84C1 23.034 1.97 24 3.162 24h17.28a2.159 2.159 0 0 0 2.16-2.16V2.162A2.16 2.16 0 0 0 20.442 0zm.958 21.84a.96.96 0 0 1-.958.96H3.162a.961.961 0 0 1-.962-.96V2.162c0-.532.432-.962.962-.962h17.28c.53 0 .96.43.96.962V21.84zm-15-1.439 2.701-2.4L6.4 15.6v4.8zm9.757-9.729c-.486-.488-1.373-1.071-2.856-1.071-1.627 0-3.303.424-4.5.812V3.6H6.4v10.41l1.697-.769c.028-.013 2.763-1.239 5.205-1.239 1.218 0 1.488.67 1.501 1.231v7.17h2.398v-7.2c.003-.155-.012-1.486-1.043-2.53M13 7.5h2.401c1.085-1.228 1.637-2.536 1.8-3.899h-2.399c-.267 1.36-.858 2.66-1.802 3.9"
  }));
});
Heroku.displayName = 'Heroku';