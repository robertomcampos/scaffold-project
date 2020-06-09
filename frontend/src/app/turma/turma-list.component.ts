import { Component } from '@angular/core';
import { TurmaService } from './turma.service';
import { ITurmaRequest, ITurmaGrid } from './turma';
import { IPaging } from '../model/paginate.model';
import { resizeFrame } from '../services/resizeFrame.js';
import { IGridRowData, IGridColumnDef } from '../../core/components/grid/IGridInterfaces';

@Component({
  selector: 'app-class-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.scss']
})

export class TurmaListComponent {

  private currentPage: number = 1;
  private readonly limit: number = 5;

  gridRowData: Partial<IGridRowData>;
  loading: boolean = true;

  gridColumnDefs: Partial<IGridColumnDef>[] = [
    { headerName: 'Nome', field: 'name' },
    { headerName: 'Nome da Escola', field: 'nameEscola' },
    { headerName: 'Data de Criação', field: 'createdDate' }
  ];

  constructor(private turmaService: TurmaService) {
    this.gridRowData = { items: [] };
    this.fetchData();
  }

  fetchData() {
    this.turmaService.get({ page: this.currentPage, limit: this.limit })
      .subscribe((result: IPaging<ITurmaRequest>) => {
        this.gridRowData = {
          items: result.items.map(item => ({
            name: item.name,
            nameEscola: item.escola.name,
            createdDate: item.createdDate
          }) as ITurmaGrid),
          currentPage: this.currentPage,
          totalItems: result.totalCount,
          itemsPerPage: result.pageSize,
        };
        this.loading = false;
        resizeFrame();
      });
  }

  onPageChange(event: number) {
    this.currentPage = event;
    this.fetchData();
  }
}
