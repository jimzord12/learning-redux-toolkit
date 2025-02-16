import { useDispatch, useSelector } from 'react-redux';
import { HabitsDispatch, HabitsState } from '../stores/store';

export const useHabitsDispatch = useDispatch.withTypes<HabitsDispatch>();
export const useHabitsSelector = useSelector.withTypes<HabitsState>();
