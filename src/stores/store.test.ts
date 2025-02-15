import { describe, test, expect } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import habitReducer, { addHabit } from './habitSlice';

const testHabit = {
  id: 123,
  completedDates: [new Date().toString()],
  createdAt: new Date().toString(),
  frequency: 'daily' as 'daily' | 'weekly',
  title: 'Testing Redux Store with Vitest!',
};

describe('Redux Store', () => {
  test('should add a new Habit when dispatching the "AddHabit" action', () => {
    const store = configureStore({
      reducer: { habits: habitReducer },
    });

    store.dispatch(addHabit(testHabit));
    expect(store.getState().habits[0].title).toBe(
      'Testing Redux Store with Vitest!'
    );
  });
});
