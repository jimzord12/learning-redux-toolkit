import { describe, test, expect } from 'vitest';
import habitReducer, { addHabit, removeHabit, updateHabit } from './habitSlice';

const testHabit = {
  id: 123,
  completedDates: [new Date().toString()],
  createdAt: new Date().toString(),
  frequency: 'daily' as 'daily' | 'weekly',
  title: 'Testing Redux Store with Vitest!',
};

describe('habit reducer', () => {
  test('should return the initial state', () => {
    expect(habitReducer(undefined, { type: '' })).toEqual([]);
  });

  test('should handle Habit Addition', () => {
    expect(habitReducer([], addHabit(testHabit))[0].id).toEqual(123);
  });

  test('should handle Habit Removal', () => {
    expect(habitReducer([testHabit], removeHabit(testHabit.id))).toEqual([]);
  });

  test('should handle Habit Update', () => {
    expect(
      habitReducer([testHabit], updateHabit({ id: 123, title: 'Huamahaha' }))[0]
        .title
    ).toEqual('Huamahaha');
  });
});
