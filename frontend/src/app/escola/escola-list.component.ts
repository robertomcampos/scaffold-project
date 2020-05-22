import { Component } from '@angular/core';
import { EscolaService } from './escola-service';
import { Escola } from './escola';
import { IPaging } from '../model/paginate.model';

@Component({
  selector: 'app-escola-list',
  templateUrl: './escola-list.component.html',
  styleUrls: ['./escola-list.component.css']
})

export class EscolaListComponent {
  escolas: Escola[] = [];
  page: number = 1;
  total: number;
  pageSize: number;

  constructor(
    private escolaService: EscolaService,
  ) {
    this.fetchData();
  }

  fetchData() {
    this.escolaService.get({ page: this.page, limit: this.pageSize }).subscribe((result: IPaging<Escola>) => {
      this.total = result.totalCount;
      this.pageSize = result.pageSize;
      this.escolas = result.items;
    });
  }

  onPageChange(event: number) {
    this.page = event;
    this.fetchData();
  }
}
