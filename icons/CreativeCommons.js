"use strict";

exports.__esModule = true;
exports.CreativeCommons = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var CreativeCommons = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "CreativeCommons"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#333",
    fillRule: "evenodd",
    d: "M11.984 0c-3.292 0-6.19 1.218-8.428 3.49C1.25 5.827 0 8.856 0 12.016c0 3.194 1.218 6.157 3.523 8.461 2.304 2.305 5.3 3.556 8.46 3.556 3.16 0 6.223-1.251 8.593-3.588C22.815 18.239 24 15.309 24 12.016c0-3.259-1.185-6.222-3.457-8.493C18.24 1.218 15.276 0 11.983 0zm.032 2.173c2.7 0 5.104 1.02 6.98 2.897 1.843 1.843 2.83 4.28 2.83 6.946 0 2.7-.954 5.07-2.797 6.881-1.943 1.91-4.445 2.93-7.013 2.93-2.6 0-5.037-1.02-6.913-2.897-1.877-1.877-2.93-4.346-2.93-6.914 0-2.6 1.053-5.07 2.93-6.98 1.843-1.875 4.214-2.863 6.913-2.863zm-.154 7.846c-.68-1.237-1.837-1.73-3.181-1.73-1.957 0-3.514 1.384-3.514 3.727 0 2.382 1.464 3.727 3.58 3.727 1.358 0 2.516-.745 3.154-1.877l-1.49-.758c-.333.798-.839 1.038-1.478 1.038-1.105 0-1.61-.919-1.61-2.13 0-1.21.426-2.13 1.61-2.13.32 0 .959.173 1.331.972l1.598-.839zm6.932 0c-.68-1.237-1.837-1.73-3.181-1.73-1.957 0-3.514 1.384-3.514 3.727 0 2.382 1.464 3.727 3.58 3.727 1.358 0 2.516-.745 3.154-1.877l-1.49-.758c-.333.798-.839 1.038-1.477 1.038-1.105 0-1.611-.919-1.611-2.13 0-1.21.426-2.13 1.61-2.13.32 0 .959.173 1.331.972l1.598-.839z"
  }));
});
exports.CreativeCommons = CreativeCommons;
CreativeCommons.displayName = 'CreativeCommons';