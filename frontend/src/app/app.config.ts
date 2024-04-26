import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideState, provideStore} from "@ngrx/store";
import {provideClientHydration} from "@angular/platform-browser";
import {provideAnimations} from "@angular/platform-browser/animations";
import {provideHttpClient, withFetch} from "@angular/common/http";
import {provideEffects} from "@ngrx/effects";
import {TaskReducer} from "./states/task/task.reducer";
import {TaskEffect} from "./states/task/task.effect";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideState({ name: 'task', reducer: TaskReducer }),
    provideEffects(TaskEffect),
  ]
};
