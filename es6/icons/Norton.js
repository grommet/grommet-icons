function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React, { forwardRef } from 'react';
import { StyledIcon } from '../StyledIcon';
var Norton = /*#__PURE__*/forwardRef(function (props, ref) {
  return /*#__PURE__*/React.createElement(StyledIcon, _extends({
    ref: ref,
    viewBox: "0 0 24 24",
    a11yTitle: "Norton"
  }, props), /*#__PURE__*/React.createElement("path", {
    fill: "#E0B02F",
    d: "M21.91.816h.797v.797h-.797V.816zm0 .797h-1.477v.797h1.477v-.797zm-1.477.797v1.554h-.738V2.41h.738zm0 1.554h.758v.758h-.758v-.758zm.758 0v-.748h.836v.748h-.836zm-.758.758v1.613h-.65v.632h-.69v.923H18.5v.787h-.758V7.9h-.758l-.01.777h.768v.826h-.758l.01.903h-.651l.01.758h-.603l-.01.855c-1.136 1.635-1.923 3.351-2.633 5.063-.09.217-.123.395-.233.524-.239.28-.595.368-.885.36-.542-.015-1.02-.268-1.272-.855-.85-1.97-1.27-3.35-3.605-5.937-.376-.417-.289-.949.01-1.117.286-.163.687-.046 1.136.204 1.258.7 1.958 1.415 3.45 3.4.543-1.311 1.482-3.084 2.652-5.004h.544V7.9h.515v-.75h.758V5.956h.817l-.01.758h.758v-.758h-.748v-.68h.68v-.554h1.253V5.5h.768v-.778h.738zm-1.506 0v-.758h.768v.758h-.768zm0-.758h-.767v-.728h.767v.728zm1.506-1.55h.757v.798h-.757v-.798zm2.27-.799h.819v.799h-.82v-.799zm-6.156 2.929v.742h-.933V6.53h-.933v.734a7.115 7.115 0 0 0-3.313-.812c-3.947 0-7.152 3.195-7.152 7.142 0 3.946 3.205 7.141 7.152 7.141a7.139 7.139 0 0 0 7.141-7.141 7.115 7.115 0 0 0-.823-3.333h.726v-.933h.622v-.933h.622v-.777h.27a10.357 10.357 0 0 1 1.887 5.976C21.813 19.34 17.153 24 11.406 24 5.66 24 1 19.34 1 13.594 1 7.847 5.66 3.187 11.406 3.187c1.87 0 3.624.493 5.14 1.357zM22.703 0h.819v.817h-.82V0z"
  }));
});
Norton.displayName = 'Norton';
export { Norton };