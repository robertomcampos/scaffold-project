import { Component } from '@angular/core';
import { TurmaService } from './turma-service';
import { Turma } from './turma';
import { IPaging } from '../model/paginate.model';


@Component({
  selector: 'app-class-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})

export class TurmaListComponent {
  turmas: Turma[] = [];
  page: number = 1;
  total: number;
  pageSize: number;

  constructor(private turmaService: TurmaService) {
    this.fetchData();
  }

  fetchData() {
    this.turmaService.get({ page: this.page, limit: this.pageSize }).subscribe((result: IPaging<Turma>) => {
      this.total = result.totalCount;
      this.pageSize = result.pageSize;
      this.turmas = result.items;
    });
  }

  onPageChange(event: number) {
    this.page = event;
    this.fetchData();
  }
}
