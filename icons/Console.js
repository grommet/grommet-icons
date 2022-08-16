"use strict";

exports.__esModule = true;
exports.Console = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Console = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Console"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#000",
    d: "M16 18a1 1 0 1 0 0-2v2zm-8-2a1 1 0 1 0 0 2v-2zm.707-8.707a1 1 0 1 0-1.414 1.414l1.414-1.414zM11 11l.707.707a1 1 0 0 0 0-1.414L11 11zm-3.707 2.293a1 1 0 1 0 1.414 1.414l-1.414-1.414zM7 4h10V2H7v2zm13 3v10h2V7h-2zm-3 13H7v2h10v-2zM4 17V7H2v10h2zm3 3a3 3 0 0 1-3-3H2a5 5 0 0 0 5 5v-2zm13-3a3 3 0 0 1-3 3v2a5 5 0 0 0 5-5h-2zM17 4a3 3 0 0 1 3 3h2a5 5 0 0 0-5-5v2zM7 2a5 5 0 0 0-5 5h2a3 3 0 0 1 3-3V2zm9 14H8v2h8v-2zM7.293 8.707l3 3 1.414-1.414-3-3-1.414 1.414zm3 1.586-3 3 1.414 1.414 3-3-1.414-1.414z"
  }));
});
exports.Console = Console;
Console.displayName = 'Console';