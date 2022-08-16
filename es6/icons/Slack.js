function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Slack = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Slack"
  }, props), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "#E01E5A",
    d: "M5.048 15.124a2.512 2.512 0 0 1-2.515 2.514A2.512 2.512 0 0 1 .02 15.124a2.512 2.512 0 0 1 2.514-2.514h2.515v2.514zm1.257 0a2.512 2.512 0 0 1 2.514-2.514 2.512 2.512 0 0 1 2.514 2.514v6.286a2.512 2.512 0 0 1-2.514 2.514 2.512 2.512 0 0 1-2.514-2.514v-6.286z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#36C5F0",
    d: "M8.819 5.029a2.512 2.512 0 0 1-2.514-2.515A2.512 2.512 0 0 1 8.819 0a2.512 2.512 0 0 1 2.514 2.514V5.03H8.82zm0 1.276a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514H2.514A2.512 2.512 0 0 1 0 8.82a2.512 2.512 0 0 1 2.514-2.514H8.82z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#2EB67D",
    d: "M18.895 8.819a2.512 2.512 0 0 1 2.515-2.514 2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514h-2.515V8.82zm-1.257 0a2.512 2.512 0 0 1-2.514 2.514 2.512 2.512 0 0 1-2.515-2.514V2.514A2.512 2.512 0 0 1 15.124 0a2.512 2.512 0 0 1 2.514 2.514V8.82z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "#ECB22E",
    d: "M15.124 18.895a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.515 2.512 2.512 0 0 1-2.514-2.515v-2.514h2.514zm0-1.257a2.512 2.512 0 0 1-2.514-2.514 2.512 2.512 0 0 1 2.514-2.514h6.305a2.512 2.512 0 0 1 2.514 2.514 2.512 2.512 0 0 1-2.514 2.514h-6.305z"
  })));
});
Slack.displayName = 'Slack';
export { Slack };