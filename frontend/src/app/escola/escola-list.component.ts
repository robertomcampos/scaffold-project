import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EscolaService } from './escola-service';
import { Escola } from './escola';
import { IPaging } from '../model/paginate.model';
import { resizeFrame } from '../services/resizeFrame.js';
import { IGridRowData, IGridColumnDef } from '../../core/components/grid/IGridInterfaces';

@Component({
  selector: 'app-escola-list',
  templateUrl: './escola-list.component.html',
  styleUrls: ['./escola-list.component.scss']
})

export class EscolaListComponent {

  private currentPage: number = 1;
  private readonly limit: number = 5;

  gridRowData: Partial<IGridRowData>;
  loading: boolean = true;

  gridColumnDefs: Partial<IGridColumnDef>[] = [
    { headerName: 'Nome', field: 'name' },
    { headerName: 'Endereço', field: 'address' },
    { headerName: 'Data de Criação', field: 'createdDate' }
  ];

  constructor(
    private escolaService: EscolaService,
    private router: Router
  ) {
    this.gridRowData = { items: [] };
    this.fetchData();
  }

  private fetchData() {
    this.escolaService.get({ page: this.currentPage, limit: this.limit }).subscribe((result: IPaging<Escola>) => {
      this.gridRowData = {
        items: result.items,
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

  onRemoveAll(ids: string[]) {
    this.escolaService.removeAll(ids).subscribe(() => {
      this.router.navigateByUrl('/escolas');
    });
  }

  onRemove(id: string) {
    this.escolaService.remove(id).subscribe(() => {
      this.router.navigateByUrl('/escolas');
    });
  }
}
