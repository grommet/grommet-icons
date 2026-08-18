// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import { deepMerge } from './utils';
import { base } from './themes';

export const defaultProps = {
  theme: base,
};

export const extendDefaultTheme = (theme) => {
  defaultProps.theme = deepMerge(base, theme);
};
