"use strict";

exports.__esModule = true;
exports.Like = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Like = exports.Like = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Like"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    d: "M13.6602 2.0041C14.3731 1.32119 15.4116 1.08306 16.3584 1.39863L16.5068 1.45234C17.9642 2.03329 18.6105 3.74922 17.8994 5.14765L17.8242 5.28633L16.2412 8.00019H19.6387C21.4346 8.00019 22.8148 9.56231 22.6221 11.3225L22.5986 11.4934L21.5439 17.8215C21.1421 20.2324 19.0555 22.0002 16.6113 22.0002H11.7256C11.2009 22.0002 10.6798 21.9168 10.1816 21.7551L9.96973 21.6818L6.82031 20.5002H2C1.44786 20.5002 1.00024 20.0523 1 19.5002C1.00015 18.948 1.44781 18.5002 2 18.5002H7L7.08984 18.5041C7.17904 18.5121 7.26745 18.5321 7.35156 18.5637L10.6719 19.8088L10.9277 19.8918C11.1871 19.9633 11.4557 20.0002 11.7256 20.0002H16.6113C18.0777 20.0002 19.329 18.9397 19.5703 17.4934L20.625 11.1643L20.6377 11.051C20.6675 10.4877 20.218 10.0002 19.6387 10.0002H14.5C14.142 10.0002 13.8112 9.80856 13.6328 9.49824C13.4547 9.18795 13.4557 8.80542 13.6357 8.49629L16.0967 4.27851L16.1318 4.2082C16.2784 3.87374 16.1305 3.48011 15.7998 3.32539L15.7256 3.29609C15.5022 3.22168 15.259 3.26927 15.0811 3.41621L15.0088 3.48457L11.2432 7.66914C11.2316 7.68201 11.2193 7.69497 11.207 7.70722L7.70703 11.2072C7.51952 11.3946 7.26511 11.5002 7 11.5002H2C1.44786 11.5002 1.00024 11.0523 1 10.5002C1.00015 9.94804 1.44781 9.50019 2 9.50019H6.58496L9.78223 6.30195L13.5225 2.14668L13.6602 2.0041Z",
    fill: "#000"
  }));
});
Like.displayName = 'Like';