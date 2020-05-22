import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EscolaService } from '../escola/escola-service';
import { Escola } from '../escola/escola';
import { TurmaService } from './turma-service';
import { NotificationService } from '../services/notification.service';

@Component({
    selector: 'app-turma-create',
    templateUrl: './turma-create.component.html',
    styleUrls: ['./turma-create.component.css']
})

export class TurmaCreateComponent {
    escolas: Escola[];

    constructor(
        private escolaService: EscolaService,
        private turmaService: TurmaService,
        private notificationService: NotificationService,
        private router: Router
    ) {
        this.escolaService.getAll().subscribe((result) => {
            this.escolas = result;
        });
    }

    turmaForm = new FormGroup({
        escolaId: new FormControl(''),
        name: new FormControl(''),
    });

    onSubmit() {
        const { name, escolaId } = this.turmaForm.value;

        this.turmaService.create({ name, escolaId }).subscribe(() => {
            this.notificationService.showSuccess(`A Turma foi criada com sucesso.`);
            this.router.navigateByUrl('/turmas');
        });
    }
}
