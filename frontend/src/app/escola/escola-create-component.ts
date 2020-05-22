import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EscolaService } from './escola-service';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-escola-create',
    templateUrl: './escola-create.component.html',
    styleUrls: ['./escola-create.component.css']
})

export class EscolaCreateComponent {
    constructor(
        private escolaService: EscolaService,
        private notificationService: NotificationService,
        private router: Router
    ) {}

    escolaForm = new FormGroup({
        name: new FormControl(''),
        address: new FormControl(''),
    });

    onSubmit() {
        const { name, address } = this.escolaForm.value;
        
        this.escolaService.create({ name, address })
        .subscribe(() => {
            this.notificationService.showSuccess(`A Escola foi criada com sucesso.`);
            this.router.navigateByUrl('/escolas');
        });
    }
}
