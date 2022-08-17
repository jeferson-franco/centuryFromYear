const solution = require('./centuryFromYear.js');

test('test 1', () => {
    expect(solution(1905)).toBe(20);
});

test('test 2', () => {
    expect(solution(1700)).toBe(17);
});

test('test 3', () => {
    expect(solution(1988)).toBe(20);
});

test('test 4', () => {
    expect(solution(2000)).toBe(20);
});

test('test 5', () => {
    expect(solution(2001)).toBe(21);
});

test('test 6', () => {
    expect(solution(200)).toBe(2);
});

test('test 7', () => {
    expect(solution(374)).toBe(4);
});

test('test 8', () => {
    expect(solution(45)).toBe(1);
});

test('test 9', () => {
    expect(solution(8)).toBe(1);
});
