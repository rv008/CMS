import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { NavComponent } from './components/nav/nav.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LoginComponent } from './components/login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'appointment',
        component: AppointmentComponent
      },
      {
        path: 'todoList',
        component: TodoListComponent
      },
      {
        path: 'todoAdd',
        component: TodoAddComponent
      },
      // Home Page
      {
        path: '',
        redirectTo: '/appointment',
        pathMatch: 'full'
      },
      // 404 Page
      {
        path: '**',
        component: PageNotFoundComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    TodoAddComponent,
    TodoListComponent,
    PageNotFoundComponent,
    NavComponent,
    NavigationBarComponent,
    LoginComponent,
    AppointmentComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
