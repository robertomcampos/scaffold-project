import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    activeItem: number = 0;
    HOME = 0;
    SCHOOLS = 1;
    CLASSES = 2;

    constructor(private router: Router) { }

    onClick(value: number) {
        this.activeItem = value;

        switch (value) {
            case this.HOME:
                return this.router.navigateByUrl('/home');
            case this.SCHOOLS:
                return this.router.navigateByUrl('/escolas');
            case this.CLASSES:
                return this.router.navigateByUrl('/turmas');
            default:
                return this.router.navigateByUrl('/home');
        }
    }
}