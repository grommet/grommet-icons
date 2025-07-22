import metadata from '../metadata';
test('metadata', function () {
  expect(metadata).toMatchSnapshot();
});