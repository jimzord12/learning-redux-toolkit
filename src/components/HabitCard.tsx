import { useMemo } from 'react';
import { Habit } from '../types/habits';
import PillTag from './PillTag';

type Props = { habit: Habit };

const HabitCard = ({ habit }: Props) => {
  const isOnStreak = useMemo(() => {
    if (!habit.onStreak) {
      console.log(`Habit #${habit.id} does NOT have an onStreak method!`);
      return;
    }
    console.log(`Habit #${habit.id} HAS an onStreak method!`);
    console.log(habit.onStreak()!);

    return habit.onStreak()!;
  }, [habit]);

  return (
    <div
      className="card shadow-lg bg-dark text-light border border-4 border-warning rounded-4"
      style={{ minHeight: 200 }}
    >
      <div className="card-body">
        <h3 className="card-titke">{habit.title}</h3>
        <div className="d-flex gap-2">
          <PillTag text={`#${habit.id}`} color="info" />
          <PillTag text={`${habit.frequency}`} />
          {
            isOnStreak && (
              <PillTag text="🔥 Streak!" className="onstreak-pill-bg-color" />
            )
            // : (
            //   <PillTag text="🔥 Streak!" className="not onstreak-pill-bg-color" />
            // )
          }
        </div>

        <ul
          className="overflow-auto"
          style={{ maxHeight: 50, width: 'fit-content', paddingRight: 12 }}
        >
          {habit.completedDates.map((date, idx) => (
            <li key={`${idx}-${date}`}>{date}</li>
          ))}
        </ul>
        <p>{habit.createdAt}</p>
      </div>
    </div>
  );
};

export default HabitCard;
