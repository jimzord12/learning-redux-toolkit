export interface Habit {
  readonly id: number;
  frequency: 'daily' | 'weekly';
  title: string;
  completedDates: ReturnType<typeof Date>[];
  createdAt: ReturnType<typeof Date>;
}
