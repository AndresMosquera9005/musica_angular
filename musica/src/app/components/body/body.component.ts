import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { HeaderComponent } from "../header/header.component";
import { Router } from '@angular/router';

@Component({
    selector: 'app-body',
    standalone: true,
    templateUrl: './body.component.html',
    styleUrl: './body.component.css',
    imports: [LoginComponent, HeaderComponent]
})
export class BodyComponent {
    constructor( private router: Router ){  }
    musicaLista(){
        this.router.navigate(['musicaLista'])
    }

}
