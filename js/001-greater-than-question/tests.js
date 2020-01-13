const solution = require('./solution');

test('checkGreaterValue function is defined', () => {
  expect(typeof checkGreaterValue).toEqual('function');
});

test('returns correct return value for 1, 2', () => {
  expect(checkGreaterValue(1, 2)).toEqual(2);
});

test('returns correct return value for 2, 1', () => {
  expect(checkGreaterValue(2, 1)).toEqual(1);
});

test('returns correct return value for 3, 3', () => {
  expect(checkGreaterValue(3, 3)).toEqual(0);
});

test('returns correct return value for NaN, true', () => {
  expect(checkGreaterValue(NaN, true)).toEqual(null);
});
