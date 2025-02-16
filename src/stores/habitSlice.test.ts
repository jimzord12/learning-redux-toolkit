import { describe, test, expect } from 'vitest';
import habitReducer, {
  addHabit,
  HabitInitProps,
  removeHabit,
  updateHabit,
} from './habitSlice';

const createdHabit = {
  id: 123,
  completedDates: [new Date().toString()],
  createdAt: new Date().toString(),
  frequency: 'daily' as 'daily' | 'weekly',
  title: 'Testing Redux Store with Vitest!',
};

const userInputForHabit = {
  frequency: 'daily' as 'daily' | 'weekly',
  title: 'Testing Redux Store with Vitest!',
} satisfies HabitInitProps;

describe('habit reducer', () => {
  test('should return the initial state', () => {
    expect(habitReducer([], { type: '' })).toEqual([]);
  });

  test('should handle Habit Addition', () => {
    expect(habitReducer([], addHabit(userInputForHabit))[0].id).toEqual(0);
  });

  test('should handle Habit Removal', () => {
    expect(habitReducer([createdHabit], removeHabit(createdHabit.id))).toEqual(
      []
    );
  });

  test('should handle Habit Update', () => {
    expect(
      habitReducer(
        [createdHabit],
        updateHabit({ id: 123, title: 'Huamahaha' })
      )[0].title
    ).toEqual('Huamahaha');
  });
});
