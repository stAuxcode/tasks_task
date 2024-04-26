import { Injectable, inject } from '@angular/core';
import { TaskApiService } from '../../services/task-api.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as TaskActions from './task.action';
import { catchError, map, of, switchMap } from 'rxjs';
@Injectable()
export class TaskEffect {
  private api = inject(TaskApiService);
  action$ = inject(Actions);

  loadTasks$ = createEffect(() =>
    this.action$.pipe(
      ofType(TaskActions.getTasks),
      switchMap(() =>
        this.api.getTasks().pipe(
          map((res) => TaskActions.getTasksSuccess({ tasks: res })),
          catchError((error: { message: string }) =>
            of(
              TaskActions.loadFailure({
                errorMessage: 'Fail to load products',
              })
            )
          )
        )
      )
    )
  );
  getSpecTasks$ = createEffect(() =>
    this.action$.pipe(
      ofType(TaskActions.getTask),
      switchMap((id) =>
        this.api.getSpecTask(id.taskId).pipe(
          map((res) => TaskActions.getTasksSuccess({ tasks: res })),
          catchError((error: { message: string }) =>
            of(
              TaskActions.loadFailure({
                errorMessage: 'Fail to load products',
              })
            )
          )
        )
      )
    )
  );
}
