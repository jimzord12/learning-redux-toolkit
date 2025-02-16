import { Habit } from '../types/habits';
import HabitCard from './HabitCard';

type Props = {
  habits: Habit[];
};

const HabitList = ({ habits }: Props) => {
  return (
    <div className="d-flex flex-column gap-4">
      {habits.map((habit) => (
        <HabitCard habit={habit} key={habit.id} />
      ))}
    </div>
  );
};

export default HabitList;
