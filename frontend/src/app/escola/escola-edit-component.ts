import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EscolaService } from './escola-service';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-escola-edit',
    templateUrl: './escola-edit.component.html'
})

export class EscolaEditComponent {
    constructor(
        private escolaService: EscolaService,
        private notificationService: NotificationService,
        private router: Router
    ) { }

    escolaForm = new FormGroup({
        name: new FormControl('', Validators.required),
        address: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        term: new FormControl(false)
    });

    onSubmit() {
        const { name, address, email } = this.escolaForm.value;

        this.escolaService.create({ name, address, email })
            .subscribe(() => {
                this.notificationService.showSuccess(`A Escola foi criada com sucesso.`);
                this.router.navigateByUrl('/escolas');
            });
    }
}
