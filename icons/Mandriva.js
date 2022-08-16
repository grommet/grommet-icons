"use strict";

exports.__esModule = true;
exports.Mandriva = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Mandriva = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Mandriva"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#E8B845",
    fillRule: "evenodd",
    d: "M14.557 17.2c-3.021 2.72-6.354 4.146-9.075 4.148h-.008c-1.938-.001-3.565-.726-4.544-2.222C-1.43 15.519.858 8.797 6.042 4.11c.44-.398.888-.768 1.339-1.111-4.343 4.582-6.112 10.546-3.938 13.868 1.952 2.983 6.474 2.899 10.912.13l-1.323-1.332c-.157-.157-.428-.258-.692-.258a.826.826 0 0 0-.292.05l-4.279 1.656a.774.774 0 0 1-.275.06c-.176 0-.259-.093-.292-.148-.052-.085-.087-.24.042-.495l2.094-4.082c.148-.29.1-.748-.105-1L6.336 7.892c-.195-.239-.18-.406-.134-.504.033-.07.126-.19.372-.19.048 0 .1.006.155.015l4.528.729a.68.68 0 0 0 .11.008c.307 0 .655-.18.809-.417l2.487-3.853c.152-.237.302-.287.4-.287.09 0 .306.044.368.449l.706 4.533c.05.322.358.664.672.747l4.434 1.175c.332.088.399.259.408.352.01.094-.019.274-.325.43l-4.094 2.07c-.29.147-.52.545-.502.87l.253 4.582c.01.193-.027.337-.113.428a.292.292 0 0 1-.217.093c-.123 0-.253-.068-.387-.203L14.557 17.2zM24 11.403c-1.245-.672-1.423-.64-2.355.424.671-1.244.639-1.423-.425-2.356 1.245.672 1.424.64 2.356-.424-.672 1.245-.64 1.424.424 2.356z"
  }));
});
exports.Mandriva = Mandriva;
Mandriva.displayName = 'Mandriva';