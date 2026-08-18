// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import metadata from '../metadata';

test('metadata', () => {
  expect(metadata).toMatchSnapshot();
});
