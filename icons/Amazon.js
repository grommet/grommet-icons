"use strict";

exports.__esModule = true;
exports.Amazon = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Amazon = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Amazon"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#F90",
    fillRule: "evenodd",
    d: "M11.992 23.94c-3.155-.021-5.956-1.061-8.46-2.955a16.663 16.663 0 0 1-2.446-2.282c-.027-.03-.072-.058-.075-.09-.011-.117-.008-.234-.011-.35.1.016.218.003.298.053.67.417 1.314.878 2 1.264a18.612 18.612 0 0 0 6.378 2.192c1.18.18 2.365.24 3.55.17a17.755 17.755 0 0 0 6.486-1.648c.325-.151.644-.316.964-.479.154-.079.307-.111.438.028.139.146.133.322.036.485a1.11 1.11 0 0 1-.222.248c-1.841 1.633-3.995 2.636-6.396 3.103-.832.161-1.684.217-2.527.321l-.013-.06m8.89-5.095c-.456.044-.961.094-1.467.14-.11.01-.224.017-.334.01-.128-.008-.148-.086-.078-.18a.658.658 0 0 1 .162-.137c.536-.359 1.141-.516 1.769-.6a4.51 4.51 0 0 1 1.773.096c.394.106.48.153.45.61-.078 1.206-.466 2.303-1.34 3.183-.045.046-.087.104-.143.126-.074.029-.16.028-.24.04.002-.073-.013-.152.009-.219.208-.634.426-1.265.633-1.9a1.97 1.97 0 0 0 .073-.397c.051-.428-.12-.643-.574-.71-.212-.03-.427-.039-.693-.062M13.997 9.42c-.86-.005-1.68.032-2.466.296-.388.13-.781.295-1.115.527-.923.639-1.163 1.59-1.087 2.65.04.562.209 1.082.623 1.489.588.578 1.579.654 2.374.184.693-.41 1.107-1.042 1.375-1.779.395-1.085.27-2.216.296-3.367m.632 6.353c-.309.28-.594.545-.884.804-1.118.994-2.438 1.438-3.92 1.467-.805.017-1.596-.044-2.349-.342-1.342-.53-2.197-1.51-2.544-2.902-.431-1.728-.286-3.392.737-4.902.756-1.116 1.849-1.78 3.11-2.186 1.084-.35 2.205-.502 3.33-.628.618-.07 1.236-.13 1.884-.199-.02-.773.09-1.55-.181-2.297-.241-.662-.75-1.003-1.414-1.155-1.007-.23-2.147.145-2.688.938-.184.27-.296.597-.395.913-.139.445-.343.59-.805.535-.902-.107-1.807-.196-2.71-.302-.447-.052-.624-.307-.537-.742.397-1.98 1.543-3.363 3.41-4.09 2.201-.86 4.452-.927 6.684-.106 1.85.68 2.865 2.035 3 4.013.046.668.052 1.34.055 2.009.007 1.732.016 3.464-.003 5.196-.01.965.258 1.82.844 2.582.141.183.284.367.403.564.198.327.145.575-.141.822-.737.636-1.472 1.273-2.208 1.911-.404.352-.685.347-1.092.004a7.019 7.019 0 0 1-1.357-1.569c-.069-.107-.142-.21-.229-.338"
  }));
});
exports.Amazon = Amazon;
Amazon.displayName = 'Amazon';