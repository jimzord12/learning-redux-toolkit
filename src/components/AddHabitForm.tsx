import { useState } from 'react';
import { Habit } from '../types/habits';
import {
  useHabitsDispatch,
  useHabitsSelector,
} from '../hooks/habitsStoreHooks';
import { addHabit, removeHabit, updateHabit } from '../stores/habitSlice';

const AddHabitForm = () => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState<Habit['frequency']>('daily');

  const habits = useHabitsSelector((state) => state.habits);
  const dispatch = useHabitsDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add logic

    dispatch(
      addHabit({
        frequency: frequency,
        title: name,
      })
    );

    // Reseting Fields
    setName('');
    setFrequency('daily');
  };

  return (
    <div className="add-habit-form">
      <form>
        <div className="d-flex flex-column">
          <div className="d-flex flex-column">
            <label htmlFor="habit-name">Habit Name:</label>
            <input
              id="habit-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter habit name"
            />
          </div>

          <div className="d-flex flex-column">
            <label htmlFor="frequency">Select Frequency:</label>
            <select
              name="frequency-types"
              id="frequency"
              defaultValue="daily"
              onChange={(e) => {
                console.log(e.target.value);
              }}
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
            </select>

            <button className="mt-4 btn btn-primary shadow-sm">
              Add Habit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddHabitForm;
