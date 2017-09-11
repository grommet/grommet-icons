import metadata from '../metadata';

test('metadata', () => {
  expect(metadata).toMatchSnapshot();
});
