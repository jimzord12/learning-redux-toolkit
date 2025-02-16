import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Habit } from '../types/habits';
import dummyHabits from '../data/dummyHabits';
import { idGenerator } from '../utils/generators/generators';
import { getDateDiff } from '../utils/helpers/dateDifference/getDateDiff';

const idHabitGen = idGenerator();

const initialState: Habit[] = dummyHabits;

export type HabitInitProps = Omit<Habit, 'completedDates' | 'createdAt' | 'id'>;

export const habitSlice = createSlice({
  name: 'habits',
  initialState: initialState,
  reducers: {
    addHabit: (state: Habit[], action: PayloadAction<HabitInitProps>) => {
      const newHabit: Habit = {
        id: idHabitGen.next().value!,
        title: action.payload.title,
        completedDates: [],
        createdAt: new Date().toString(),
        frequency: action.payload.frequency,
        onStreak() {
          if (this.completedDates.length < 3) return false;
          const last3Timestamps = this.completedDates.slice(-3).reverse();

          switch (this.frequency) {
            case 'daily':
              return last3Timestamps.every((cur, idx, arr) => {
                const nextDate = arr[idx + 1];
                return getDateDiff(cur, nextDate, 'day') <= 1.5;
              });

            case 'weekly':
              return last3Timestamps.every((cur, idx, arr) => {
                const nextDate = arr[idx + 1];
                return getDateDiff(cur, nextDate, 'week') <= 1.5;
              });

            default:
              console.error(
                `📛 [CustomError]: Frequency ${this.frequency} is NOT valid.`
              );
              return false;
          }
        },
      };

      state.push(newHabit); // ✅ Moved outside the object
    },

    removeHabit: (state, action: PayloadAction<number>) => {
      if (state.length === 0) {
        console.log('Habits[] is empty! Cannot remove from an empty Array.');
        return;
      }
      const index = state.findIndex((habit) => habit.id === action.payload);
      state.splice(index, 1);
    },

    // ⚠️⚠️ Common Pitfall ⚠️⚠️
    // updateHabit: (
    //     state,
    //     action: PayloadAction<Partial<Habit> & { id: number }>
    //   ) => {
    //     let habitToUpdate = state.find((habit) => habit.id === action.payload.id);
    //     if (habitToUpdate === undefined) {
    //       console.error(`📛 [CustomError]: Could not find habit with id: [${action.payload.id}]`);
    //       return;
    //     }
    //     🚨 habitToUpdate = { ...habitToUpdate, ...action.payload };  // 🚨 This is the problem
    //   }

    // ❌ The Issue ❌
    // The code doesn't work as expected because:

    // 1. While habitToUpdate is initially a reference to the state object, the reassignment with = breaks this reference
    // 2. The spread operation creates a new object that's assigned to the local habitToUpdate variable
    // 3. The original state remains unchanged

    updateHabit: (
      state,
      action: PayloadAction<Partial<Habit> & { id: number }>
    ) => {
      const IndexOfHabitToUpdate = state.findIndex(
        (habit) => habit.id === action.payload.id
      );
      if (IndexOfHabitToUpdate === -1) {
        console.error(
          `📛 [CustomError]: Could not find habit with id: [${action.payload.id}] | From: habitSlice.ts`
        );
        return;
      }
      state[IndexOfHabitToUpdate] = {
        ...state[IndexOfHabitToUpdate],
        ...action.payload,
      };
    },
  },
});

export const { addHabit, removeHabit, updateHabit } = habitSlice.actions;

export default habitSlice.reducer;
