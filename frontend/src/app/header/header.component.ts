import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent {
    activeItem: number = 1;
    ESCOLAS = 1;
    TURMAS = 2;

    constructor(private router: Router) { }

    onClick(value: number) {
        this.activeItem = value;

        switch (value) {
            case this.ESCOLAS:
                return this.router.navigateByUrl('/escolas');
            case this.TURMAS:
                return this.router.navigateByUrl('/turmas');
            default:
                return this.router.navigateByUrl('/escolas');
        }
    }
}