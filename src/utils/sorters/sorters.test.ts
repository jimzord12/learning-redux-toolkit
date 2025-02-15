import { expect, test } from 'vitest';
import { alphabeticSorter } from './sorters';
import { Habit } from '../../types/habits';
import { idGenerator } from '../generators/generators';

const idHabitGen = idGenerator();

const testHabitsArr: Habit[] = [
  {
    id: idHabitGen.next().value!,
    title: 'bbbb',
    completedDates: [new Date().toString()],
    createdAt: new Date().toString(),
    frequency: 'weekly',
  } satisfies Habit,
  {
    id: idHabitGen.next().value!,
    title: 'aaaa',
    completedDates: [new Date().toString()],
    createdAt: new Date().toString(),
    frequency: 'weekly',
  } satisfies Habit,
];
test("alphabetically sorts a Habits' Array", () => {
  expect(alphabeticSorter(testHabitsArr)[0].title).toBe('aaaa');
});
