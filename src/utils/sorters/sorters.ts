import type { Habit } from '../../types/habits';

export const alphabeticSorter = (habits: Habit[]): Habit[] => {
  // String.prototype.charCodeAt(stringIndex: number) returns the Unicode Number.
  return habits.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0));
};
