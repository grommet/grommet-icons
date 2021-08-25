function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Dribbble = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Dribbble"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#E74D89",
    d: "M11.432 8.635c-1.77-3.15-3.666-5.716-3.803-5.904A10.263 10.263 0 0 0 1.97 9.887c.27.004 4.54.056 9.46-1.252zm1.278 3.443c.135-.041.27-.083.404-.122a34.204 34.204 0 0 0-.832-1.741c-5.278 1.58-10.342 1.464-10.521 1.46-.003.107-.008.215-.008.325a10.2 10.2 0 0 0 2.63 6.852l-.007-.01s2.804-4.976 8.334-6.764zM5.701 20.08l.003-.005c-.076-.058-.157-.115-.233-.176.137.11.23.181.23.181zM9.62 2.076c-.036.01-.063.02-.1.03a.535.535 0 0 1 .1-.03zm9.15 2.234A10.198 10.198 0 0 0 12 1.751c-.833 0-1.64.103-2.415.289.157.206 2.08 2.762 3.83 5.978 3.865-1.447 5.327-3.666 5.354-3.708zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm1.744-10.322c-6.015 2.096-8.001 6.31-8.04 6.396A10.2 10.2 0 0 0 12 22.247c1.42 0 2.772-.29 4.002-.811-.152-.899-.747-4.038-2.19-7.783-.024.01-.046.015-.068.025zm.46-4.132a30.12 30.12 0 0 1 .901 2.016c3.54-.446 7.024.31 7.14.335a10.206 10.206 0 0 0-2.332-6.406c-.02.029-1.663 2.405-5.709 4.055zm1.528 3.634c1.347 3.698 1.89 6.708 1.994 7.32a10.242 10.242 0 0 0 4.39-6.874c-.203-.066-3.07-.977-6.384-.446z"
  }));
});
Dribbble.displayName = 'Dribbble';
export { Dribbble };