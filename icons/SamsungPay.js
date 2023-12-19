"use strict";

exports.__esModule = true;
exports.SamsungPay = void 0;
var _react = _interopRequireWildcard(require("react"));
var _StyledIcon = require("../StyledIcon");
var _utils = require("../utils");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var SamsungPay = exports.SamsungPay = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  var prefix = (0, _utils.generatePrefix)('SamsungPay');
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "SamsungPay"
  }, props), /*#__PURE__*/_react["default"].createElement("g", {
    clipPath: "url(#" + prefix + "-a)"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#1E4BC6",
    fillRule: "evenodd",
    d: "M21.33 2.688c1.395 1.48 2.192 3.502 2.477 5.723.284 2.135.17 3.587.17 3.587s.086 1.452-.199 3.587c-.284 2.22-1.082 4.243-2.477 5.723-1.48 1.395-3.502 2.192-5.722 2.477-2.136.256-3.588.2-3.588.2s-1.451.084-3.587-.2c-2.22-.285-4.242-1.082-5.722-2.477-1.395-1.48-2.193-3.502-2.477-5.723-.257-2.135-.2-3.587-.2-3.587s-.057-1.452.228-3.587C.518 6.19 1.315 4.169 2.71 2.688 4.19 1.293 6.212.496 8.433.211 10.568-.045 12.02.012 12.02.012s1.452-.085 3.587.2c2.22.284 4.242 1.081 5.723 2.476ZM6.582 8.496H4.447v6.292h1.167v-1.793h.968c.342 0 .655-.058.911-.172.256-.113.513-.284.712-.483a2.1 2.1 0 0 0 .484-.712c.114-.285.17-.57.17-.883a2.32 2.32 0 0 0-.17-.882 2.103 2.103 0 0 0-.484-.712 2.1 2.1 0 0 0-.712-.484 2.36 2.36 0 0 0-.91-.17Zm-.996 3.388V9.55h.91c.172 0 .342.028.485.085a1.1 1.1 0 0 1 .37.256c.085.114.17.228.228.37.057.143.085.285.085.456 0 .17-.028.313-.085.456a1.082 1.082 0 0 1-.598.626 1.329 1.329 0 0 1-.484.085h-.911Zm5.067 2.733c.314.114.598.171.912.171.341 0 .626-.057.91-.171.285-.142.542-.313.712-.541v.712h1.168V9.72h-1.168v.655c-.199-.2-.427-.37-.711-.484a2.261 2.261 0 0 0-.912-.17c-.341 0-.626.056-.939.17-.285.114-.57.256-.797.484a2.707 2.707 0 0 0-.57.797c-.142.313-.199.684-.199 1.082 0 .399.086.769.228 1.082.142.313.342.57.57.797.227.2.512.37.796.484Zm1.709-.996c-.171.085-.37.114-.598.114a1.87 1.87 0 0 1-.598-.114l-.004-.002c-.17-.085-.339-.17-.48-.311a2.801 2.801 0 0 1-.313-.484 1.273 1.273 0 0 1-.114-.57c0-.199.028-.398.114-.569.057-.17.17-.313.313-.456a1.42 1.42 0 0 1 .484-.313c.2-.085.399-.114.598-.114.2 0 .398.029.598.143.199.085.341.17.484.313.142.114.227.285.313.456.085.17.114.37.114.569 0 .199-.029.398-.114.57a1.63 1.63 0 0 1-.313.455c-.143.142-.313.228-.484.313Zm5.039-.427-1.424-3.445h-1.224l2.05 4.812-1.053 2.533h1.195l2.99-7.345H18.71l-1.31 3.445Z",
    clipRule: "evenodd"
  })), /*#__PURE__*/_react["default"].createElement("defs", null, /*#__PURE__*/_react["default"].createElement("clipPath", {
    id: prefix + "-a"
  }, /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#fff",
    d: "M0 0h24v24H0z"
  }))));
});
SamsungPay.displayName = 'SamsungPay';