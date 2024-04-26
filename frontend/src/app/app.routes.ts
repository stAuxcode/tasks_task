import {Routes} from '@angular/router';
import {TaskListComponentComponent} from "./components/task-list-component/task-list-component.component";
import {TaskFormComponentComponent} from "./components/task-form-component/task-form-component.component";


export const routes: Routes = [
  { path: '', redirectTo: 'task-list', pathMatch: 'full' },
  {path: 'task-list', component: TaskListComponentComponent},
  {path: 'task', component: TaskFormComponentComponent}
];
