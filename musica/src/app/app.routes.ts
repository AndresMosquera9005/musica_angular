import { Routes } from '@angular/router';
import path from 'node:path';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "login", component: LoginComponent
    }
];
