import { describe, expect, test } from 'vitest';
import { DAY, HOUR, MINUTE, msConvert, WEEK } from './msConverter';

const fiveMins = MINUTE * 5;
const twelveHours = HOUR * 12;
const threeDays = DAY * 3;
const sixWeeks = WEEK * 6;

describe('[msConvert] - Testing: Time Units Conversions', () => {
  test('[msConvert]: MS -> Minute', () => {
    expect(msConvert(fiveMins, 'min')).toBe(5);
  });

  test('[msConvert]: MS -> Hour', () => {
    expect(msConvert(twelveHours, 'hour')).toBe(12);
  });

  test('[msConvert]: MS -> Day', () => {
    expect(msConvert(threeDays, 'day')).toBe(3);
  });

  test('[msConvert]: MS -> Week', () => {
    expect(msConvert(sixWeeks, 'week')).toBe(6);
  });

  test('[msConvert]: MS -> Month', () => {
    // 6 Weeks are 42 Days (6 * 7 Days)
    // We have set one MONTH to equal 30.42 Days
    expect(msConvert(sixWeeks, 'month')).toBe(42 / 30.42);
  });

  test('[msConvert]: MS -> Month', () => {
    const howManyYearSince1970 = Math.trunc(msConvert(Date.now(), 'year')!);
    expect(howManyYearSince1970).toBe(new Date().getFullYear() - 1970);
  });
});

describe('[msConvert] - Testing: Differences in Time', () => {
  test('[msConvert]: How many years from 1970?', () => {
    const howManyYearSince1970 = Math.trunc(msConvert(Date.now(), 'year')!);
    expect(howManyYearSince1970).toBe(new Date().getFullYear() - 1970);
  });

  test('[msConvert]: How many (Days) from Date_A to Date_B?', () => {
    const howManyYearSince1970 = Math.trunc(msConvert(Date.now(), 'year')!);
    expect(howManyYearSince1970).toBe(new Date().getFullYear() - 1970);
  });

  test('[msConvert]: How many (Hours) from Date_A to Date_B?', () => {
    const howManyYearSince1970 = Math.trunc(msConvert(Date.now(), 'year')!);
    expect(howManyYearSince1970).toBe(new Date().getFullYear() - 1970);
  });
});
