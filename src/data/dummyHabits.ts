import { Habit } from '../types/habits';
import { getDateDiff } from '../utils/helpers/dateDifference/getDateDiff';

function onStreak(this: Habit) {
  if (this.completedDates.length < 3) {
    console.log('Does not have at least 3 Dates');
    return false;
  }
  const last3Timestamps = this.completedDates.slice(-3).reverse();

  switch (this.frequency) {
    case 'daily':
      return last3Timestamps.every((cur, idx, arr) => {
        const nextDate = arr[idx + 1];
        console.log('getDateDiif: ', getDateDiff(cur, nextDate, 'day') <= 1.5);
        return getDateDiff(cur, nextDate, 'day') <= 1.5;
      });

    case 'weekly':
      return last3Timestamps.every((cur, idx, arr) => {
        const nextDate = arr[idx + 1];
        console.log('getDateDiif: ', getDateDiff(cur, nextDate, 'week') <= 1.5);

        return getDateDiff(cur, nextDate, 'week') <= 1.5;
      });

    default:
      console.error(
        `📛 [CustomError]: Frequency ${this.frequency} is NOT valid.`
      );
      return false;
  }
}

export default [
  {
    id: 0,
    title: 'Tooth Brushing',
    completedDates: [
      'December 16, 1995 22:00:00',
      'December 17, 1995 21:00:01',
      'December 18, 1995 21:00:31',
    ],
    createdAt: '2/5/2054',
    frequency: 'daily',
    onStreak,
  },
  // {
  //   id: 1,
  //   title: 'Eating Breakfast',
  //   completedDates: ['December 17, 1995 03:24:30'],
  //   createdAt: '',
  //   frequency: 'weekly',
  //   onStreak,
  // },
  // {
  //   id: 2,
  //   title: 'Waking Up Early',
  //   completedDates: [],
  //   createdAt: '',
  //   frequency: 'daily',
  //   onStreak,
  // },
  // {
  //   id: 3,
  //   title: 'Working out',
  //   completedDates: [
  //     'December 17, 1995 03:24:30',
  //     'December 17, 1995 03:24:30',
  //     'December 17, 1995 03:24:30',
  //     'December 17, 1995 03:24:30',
  //   ],
  //   createdAt: '',
  //   frequency: 'weekly',
  //   onStreak,
  // },
  // {
  //   id: 4,
  //   title: 'Socializing',
  //   completedDates: ['December 17, 1995 03:24:30'],
  //   createdAt: '',
  //   frequency: 'daily',
  //   onStreak,
  // },
  // {
  //   id: 5,
  //   title: 'Coding',
  //   completedDates: [
  //     'December 17, 1995 03:24:30',
  //     'December 17, 1995 03:24:30',
  //     'December 17, 1995 03:24:30',
  //   ],
  //   createdAt: '',
  //   frequency: 'daily',
  //   onStreak,
  // },
] satisfies Habit[];
