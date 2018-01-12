const area = require('./area.js');

test('Multiplies 2*3 to equal 6', () => {
  expect(area([2, 3])).toBe(6);
});

test('Multiplies 1*2*3 to get error -1', () => {
  expect(area([1, 2, 3])).toBe(-1);
});

test('Multiplies 2*b to get error -1', () => {
  expect(area([2, 'b'])).toBe(-1);
});

test('Multiplies a*2 to get error -1', () => {
  expect(area(['a', 2])).toBe(-1);
});
test('Multiplies -1 * 2 to get error -1', () => {
  expect(area([-1, 2])).toBe(-1);
});

test('Multiplies 2 * -1 to get error -1', () => {
  expect(area([2, -1])).toBe(-1);
});

test('Multiplies 2 * 0 to equal 0', () => {
  expect(area([2, 0])).toBe(0);
});