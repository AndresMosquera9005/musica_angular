import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { NgModule } from '@angular/core';
import { BodyComponent } from './components/body/body.component';

export const routes: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "login", component: LoginComponent
    },
    {
        path: "registrame", component: RegistroComponent
    },
    {
        path: "body", component: BodyComponent
    }
];

