const { findLatestIndex, func } = require('./');

const testData = [
  ['foobar', 'b', 'a'],
  ['foobar', 'q', 'q'],
  ['foobar', 'ba', 'fo'],
  ['foobar', 'bb', 'ff'],
  ['foobar', 'b', 'b'],
  ['fooooobar', 'o', 'b'],
  ['foobar', null, 'a'],
  ['foobar', 'b', null],
  ['foobar', null, null],
  ['0123456', '1', '2'],
  ['0123456', 1, '2'],
  ['0123456', '1', 2],
  ['0123456', 1, 2],
];

describe("findLatestIndex", function () {
  testData.forEach((item) =>
    it(
      item.toString(),
      () => expect(findLatestIndex(...item)).toBe(func(...item))
    )
  );
});
