import {Component, inject} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TaskApiService} from "../../services/task-api.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import { Task } from '../../models/task.interface';
import * as TaskActions from '../../states/task/task.action';
import * as TaskSelectors from '../../states/task/task.selector';
import {getTasks} from "../../states/task/task.action";
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list-component.component.html',
  styleUrl: './task-list-component.component.css'
})
export class TaskListComponentComponent {
  title = 'hello'
  http = inject(HttpClient);
  productApi = inject(TaskApiService);
  tasks$!: Observable<Task[]>;
  error!: Observable<string | null>;
  constructor(private store: Store<{ cart: { products: Task[] } }>) {
    this.store.dispatch(TaskActions.getTasks());
    this.tasks$ = this.store.select(TaskSelectors.selectAllTasks);
    console.log(this.tasks$)
  }

}
