import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';
import {Task} from "../models/task.interface";

@Injectable({
  providedIn: 'root'
})
export class TaskApiService {
http = inject(HttpClient);
constructor() { }

getTasks(){
  return this.http.get<Task[]>('http://localhost:9000/tasks')
  .pipe(
    map(((tasks)=> {
      return tasks.map((task)=>{
        return {...task}
      })
    }))
  )
}
  getUpdateTasks(id: string, body: object){
    return this.http.put<Task[]>(`http://localhost:9000/tasks/${id}`,body)
      .pipe(
        map(((tasks)=> {
          return tasks.map((task)=>{
            return {...task}
          })
        }))
      )
  }

  getDeleteTasks(id: string){
    return this.http.delete<Task[]>(`http://localhost:9000/tasks/${id}`)
      .pipe(
        map(((tasks)=> {
          return tasks.map((task)=>{
            return {...task}
          })
        }))
      )
  }

  createTasks(body: object){
    return this.http.post<Task[]>(`http://localhost:9000/tasks`,body)
      .pipe(
        map(((tasks)=> {
          return tasks.map((task)=>{
            return {...task}
          })
        }))
      )
  }

  getSpecTask(id: string){
    return this.http.get<Task[]>(`http://localhost:9000/tasks/${id}`,)
      .pipe(
        map(((tasks)=> {
          return tasks.map((task)=>{
            return {...task}
          })
        }))
      )
  }

}
