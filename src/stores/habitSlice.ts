import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Habit } from '../types/habits';

// const idHabitGen = idGenerator();

const initialState: Habit[] = [];

export const habitSlice = createSlice({
  name: 'habits',
  initialState: initialState,
  reducers: {
    addHabit: (state: Habit[], action: PayloadAction<Habit>) => {
      state.push(action.payload);
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
