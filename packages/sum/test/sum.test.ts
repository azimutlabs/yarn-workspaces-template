import { sum } from '..';

describe('sum', () => {
  it('should return correct sum of two numbers', () => {
    const leftNumber = 2;
    const rightNumber = 2;
    const expectedNumber = 4;

    expect(sum(leftNumber, rightNumber)).toBe(expectedNumber);
  });
});
