import { configureStore } from '@reduxjs/toolkit';
import habitReducer from './habitSlice';

const store = configureStore({
  reducer: { habits: habitReducer },
});

export type HabitsState = ReturnType<typeof store.getState>;
export type HabitsDispatch = typeof store.dispatch;

export default store;
