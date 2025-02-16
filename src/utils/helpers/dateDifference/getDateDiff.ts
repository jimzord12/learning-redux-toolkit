import { msConvert, TimeType } from '../msConverter/msConverter';

export const getDateDiff = (
  dateStrStart: string,
  dateStrEnd: string,
  timeUnit: TimeType
): number => {
  const dateStart = new Date(dateStrStart);
  const dateEnd = new Date(dateStrEnd);

  if (dateStart === null) {
    console.error(
      '📛 [CustomError]: (dateStrStart) is NOT a valid Date string.'
    );
    return -1;
  }

  if (dateEnd === null) {
    console.error('📛 [CustomError]: (dateStrEnd) is NOT a valid Date string.');
    return -1;
  }

  const diff_in_ms = Math.abs(dateEnd.getTime() - dateStart.getTime());
  console.log(
    `The Diff in (${timeUnit}) is: `
    // msConvert(diff_in_ms, timeUnit)
  );
  return msConvert(diff_in_ms, timeUnit) || -1;
};
