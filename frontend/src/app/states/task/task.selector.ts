import {createFeatureSelector, createSelector} from '@ngrx/store';
import { TaskState } from './task.reducer';
export const selectTaskFeature = createFeatureSelector<TaskState>('tasks');
export const selectAllTasks = createSelector(
  selectTaskFeature,
  (state: TaskState) => state.tasks
);

export const selectSpecTask = createSelector(
  selectTaskFeature,
  (state: TaskState) => state.tasks
);



export const selectTaskError = createSelector(
  selectTaskFeature,
  (state: TaskState) => state.error
);
