function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Suse = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Suse"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#7AC142",
    fillRule: "evenodd",
    d: "M24 8.285c-1.42-2.294-3.663-3.936-6.087-4.354-2.037-.354-5.752-.391-7.72 3.322-.822 1.55-.771 3.568.13 5.268.919 1.74 2.561 2.859 4.504 3.072 1.928.21 3.376-.236 4.19-1.288.82-1.063.972-2.509.39-3.687-.624-1.265-1.567-1.937-2.875-2.048-.999-.089-1.737.327-2.005.75a1.417 1.417 0 0 0-.218.737c0 .95.867 1.21 1.043 1.222.054-.003.316-.008.662-.095l.168-.056.2-.056a1.234 1.234 0 0 1 1.463 1.21c0 .408-.207.789-.631 1.071-.182.115-.35.179-.525.234a4.356 4.356 0 0 1-1.373.236c-1.505-.002-3.6-1.295-3.626-3.724-.014-1.371.673-2.618 1.885-3.422 1.394-.922 3.803-1.235 6.04.137 2.75 1.682 3.469 4.981 2.75 7.23-1.043 3.258-3.98 5-7.853 4.653-2.745-.244-5.295-1.693-6.812-3.874a9.615 9.615 0 0 1-1.44-3.119c-.62-2.456.006-5.066.472-6.222.8-1.981 1.993-3.813 3.566-5.482H1.001A1 1 0 0 0 0 1v22a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8.285z"
  }));
});
Suse.displayName = 'Suse';
export { Suse };