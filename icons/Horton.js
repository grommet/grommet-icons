"use strict";

exports.__esModule = true;
exports.Horton = void 0;

var _react = _interopRequireWildcard(require("react"));

var _StyledIcon = require("../StyledIcon");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Horton = /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(_StyledIcon.StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Horton"
  }, props), /*#__PURE__*/_react["default"].createElement("path", {
    fill: "#89BA4E",
    fillRule: "evenodd",
    d: "M2.3 12.977h-.157c-.319.989-.755 1.957-.932 2.97-.222 1.292-.238 2.624-.34 3.936-.027.339.126.517.465.52 1.526.02 1.352.081 1.602-1.198.017-.089.029-.178.057-.267.52-1.658.545-3.285-.27-4.875-.178-.344-.283-.723-.424-1.086zm16.606-5.922a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0zm2.176 2.737c.206.44.153 1.021.15 1.538-.005.924-.057 1.849-.098 2.773a609.04 609.04 0 0 1-.125 2.922c-.577-.355-1.037-.605-1.457-.908-.141-.1-.242-.335-.254-.517-.097-1.097-.194-2.2-.226-3.301-.017-.695-.202-1.207-.925-1.405-.383-.1-.58-.367-.726-.735-.614-1.525-1.251-3.047-1.93-4.686 1.163.214 2.237.388 3.298.618.19.04.375.278.488.472.622 1.066 1.276 2.115 1.805 3.23zm.569 7.225c0 .016.016.028.04.08.771.057 1.615.352 2.172-.718-.364-.105-.686-.201-1.01-.286-1.202-.315-1.202-.315-1.202.924zm-6.3-3.205c-.098-.347-.271-.496-.63-.549-.436-.068-.933-.117-1.272-.359-1.497-1.086-2.942-2.244-4.424-3.354-.4-.303-.496-.618-.33-1.082.245-.694.455-1.4.718-2.208-.226.025-.331.029-.432.049-1.308.29-2.604.646-3.928.86-.86.14-1.38.577-1.9 1.25C1.888 10.055.92 11.79.564 13.85c-.13.754-.371 1.489-.565 2.232.06.04.125.08.186.12.125-.144.302-.27.367-.435.404-1.09.779-2.188 1.175-3.278.205-.565.387-.61.762-.129.243.307.465.658.594 1.021.69 1.95 1.352 3.908 2.026 5.861.408 1.19.412 1.17 1.683 1.175.48 0 .654-.17.614-.638-.085-1.013-.138-2.026-.23-3.035-.045-.517.185-.755.662-.884 1.174-.315 2.34-.654 3.507-.99.735-.205.807-.18 1.17.473.764 1.36 1.563 2.704 2.261 4.101.38.767.884 1.062 1.715.973.61-.065.658-.073.493-.682-.545-1.974-1.102-3.948-1.635-5.922zm-.118-7.54c-.38-1.04-.928-1.61-2.054-1.719-.719-.069-1.417-.36-2.128-.553h-.217c-.097.214-.214.42-.287.638-.408 1.223-.787 2.454-1.207 3.669-.157.452-.056.742.327 1.021 1.062.787 2.127 1.578 3.148 2.422 1.635.989 2.24.989 2.975.985.735-.004 1.32 0 2.059 0-.093-.263-.15-.448-.222-.626-.808-1.941-1.68-3.859-2.394-5.837zm-3.786 9.18c-.287.035-.658.052-.682.536-.053 1.082-.15 2.163-.234 3.354.02.25-.073.78.113.912.274.19.759.154 1.138.101.153-.02.34-.307.392-.508.14-.521.153-1.082.327-1.59.318-.945.12-1.777-.453-2.531-.12-.162-.411-.3-.601-.275zM24 15.725c-.093-.566-.145-1.082-.274-1.579-.033-.125-.291-.238-.46-.258-.11-.016-.32.113-.36.222-.286.75.19 1.506 1.094 1.615z"
  }));
});
exports.Horton = Horton;
Horton.displayName = 'Horton';