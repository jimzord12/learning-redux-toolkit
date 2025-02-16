export type TimeType =
  | 'sec'
  | 'min'
  | 'hour'
  | 'day'
  | 'week'
  | 'month'
  | 'year';

export const SECOND = 1000;
export const MINUTE = SECOND * 60;
export const HOUR = MINUTE * 60;
export const DAY = 24 * HOUR;
export const WEEK = 7 * DAY;
export const MONTH = 30.42 * DAY;
export const YEAR = 12 * MONTH;

export const msConvert = (ms: number, type: TimeType) => {
  switch (type) {
    case 'sec':
      return ms / SECOND;

    case 'min':
      return ms / MINUTE;

    case 'hour':
      return ms / HOUR;

    case 'day':
      return ms / DAY;

    case 'week':
      return ms / WEEK;

    case 'month':
      return ms / MONTH;

    case 'year':
      return ms / YEAR;

    default:
      console.error(`📛 - [CustomErro]: Provided wrong TimeType`);
      break;
  }
};
