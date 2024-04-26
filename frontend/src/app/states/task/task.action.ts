import { createAction, props } from '@ngrx/store';
import { Task } from '../../models/task.interface';

export const getTasks = createAction('[Task Component] GET_TASKS');

export const getTasksSuccess = createAction(
  '[Task Component] GET_TASKS_SUCCESS',
  props<{tasks: Task[]}>()
);
export const getTask = createAction(
  '[Task Component] GET_TASK',
  props<{ taskId: string }>()
);
export const addTask = createAction('[Task Component] ADD_TASK', props<{task: Task}>());
export const updateTask = createAction(
  '[Task Component] UPDATE_TASK',
  props<{ taskId: string, task: Task }>()
);
export const decrementProduct = createAction(
  '[Task Component] DELETE_TASK',
  props<{ taskId: string }>()
);

export const removeItem = createAction(
  '[Task Component] RemoveItem',
  props<{ taskId: string }>()
);

export const loadFailure = createAction(
  '[Product Component] loadFailure',
  props<{ errorMessage: string }>()
);

