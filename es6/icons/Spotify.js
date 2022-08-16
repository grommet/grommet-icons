function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Spotify = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Spotify"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#1ED760",
    fillRule: "evenodd",
    d: "M19.098 10.638C15.23 8.341 8.85 8.13 5.158 9.251a1.122 1.122 0 1 1-.652-2.148C8.745 5.816 15.79 6.064 20.244 8.708a1.122 1.122 0 1 1-1.146 1.93m-.126 3.403a.936.936 0 0 1-1.287.308c-3.225-1.983-8.142-2.557-11.958-1.399a.937.937 0 0 1-1.167-.623.937.937 0 0 1 .624-1.167c4.358-1.322 9.776-.682 13.48 1.594.44.271.578.847.308 1.287m-1.469 3.267a.748.748 0 0 1-1.028.25c-2.818-1.723-6.365-2.112-10.542-1.158a.748.748 0 1 1-.333-1.458c4.571-1.045 8.492-.595 11.655 1.338a.748.748 0 0 1 .248 1.028M12 0C5.373 0 0 5.372 0 12s5.373 12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0"
  }));
});
Spotify.displayName = 'Spotify';
export { Spotify };