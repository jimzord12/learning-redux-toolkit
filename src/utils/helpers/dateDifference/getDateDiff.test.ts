import { describe, expect, test } from 'vitest';
import { getDateDiff } from './getDateDiff';

describe('[getDateDiff] - Testing: Functionality', () => {
  test('Diff Should Be (5) Days ', () => {
    const date_A = new Date(1995, 6, 10).toString();
    const date_B = new Date(1995, 6, 15).toString();

    expect(getDateDiff(date_A, date_B, 'day')).toBe(5);
  });

  test('Diff Should Be (1) Weeks ', () => {
    const date_A = new Date(1995, 6, 1).toString();
    const date_B = new Date(1995, 6, 8).toString();

    expect(getDateDiff(date_A, date_B, 'week')).toBeGreaterThanOrEqual(1);
  });
});
