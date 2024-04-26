import { createReducer, on } from '@ngrx/store';
import { Task } from '../../models/task.interface';
import * as TaskActions from './task.action';
export interface TaskState {
  tasks: Task[];
  error: string | null;
}

export const initalProductState: TaskState = {
  tasks: [],
  error: null,
};

export const TaskReducer = createReducer(
  initalProductState,
  on(TaskActions.getTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks,
    error: null,
  })),

  on(TaskActions.removeItem, (state, { taskId }) => {
    const updatedTasks = state.tasks.filter(
      (task) => task.id !== taskId
    );
    return {
      ...state,
      products: updatedTasks
    };
  }),on(TaskActions.addTask, (state, { task }) => {
    const updatedTasks = [...state.tasks, task];
    return {
      ...state,
      products: updatedTasks

    };
  }),on(TaskActions.loadFailure, (state, { errorMessage }) => ({
    ...state,
    error: errorMessage,
  }))
);
