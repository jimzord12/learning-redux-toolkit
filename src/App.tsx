import AddHabitForm from './components/AddHabitForm';
import HabitList from './components/HabitList';
import { useHabitsSelector } from './hooks/habitsStoreHooks';

function App() {
  const habits = useHabitsSelector((state) => state.habits);

  return (
    <div className="container pb-4">
      <div className="show-breakpoint"></div>
      <div>
        <h1 className="text-dark">Habit Tracker</h1>
        <AddHabitForm />

        <hr />
        <div className="mt-4">
          <HabitList habits={habits} />
        </div>
      </div>
    </div>
  );
}

export default App;
