import { Component, Input, Output, OnChanges, EventEmitter, SimpleChanges } from '@angular/core';
import { IGridColumnDef, IGridRowData, IGridCheckedItem } from './IGridInterfaces';

@Component({
    selector: 'grid-component',
    templateUrl: './grid.component.html',
})

export class GridComponent implements OnChanges {
    @Input() editUrl: string;
    @Input() rowData: IGridRowData;
    @Input() columnDefs: IGridColumnDef[];
    @Input() hasCheck: boolean;
    @Input() hasCheckAll: boolean = false;
    @Output() onPageChange = new EventEmitter();
    @Output() onRemoveAll = new EventEmitter();

    allCheckedItems: any[] = [];
    checkedItems: IGridCheckedItem[];

    checkedAll: boolean;

    ngOnChanges(changes: SimpleChanges) {
        if (changes.rowData && (this.hasCheck || this.hasCheckAll)) {
            this.checkedItems = this.rowData.items.map(item => ({ id: item.id, checked: false }) as IGridCheckedItem);
            this.checkedItems.forEach(item => item.checked = this.allCheckedItems.find(i => i === item.id));
            this.checkedAll = this.isCheckedAll();
        }
    }

    gridPageChange(event: number) {
        this.checkedAll = false;
        this.onPageChange.emit(event);
    }

    gridRemoveAll() {
        this.onRemoveAll.emit(this.allCheckedItems);
    }

    gridCheckedAll() {
        this.checkedAll = !this.checkedAll;
        this.checkAll(this.checkedAll);
    }

    gridChecked(item: IGridCheckedItem) {
        item.checked = !item.checked;
        this.setAllCheckedItems(item);
        this.checkedAll = this.hasCheckAll && item.checked && this.isCheckedAll();
    }

    private isCheckedAll = () => this.checkedItems.filter(item => item.checked).length === this.rowData.items.length;

    private setAllCheckedItems = (item: IGridCheckedItem) => {
        if (item.checked && !this.allCheckedItems.includes(item.id)) {
            this.allCheckedItems.push(item.id);
        }
        if (!item.checked && this.allCheckedItems.includes(item.id)) {
            this.allCheckedItems = this.allCheckedItems.filter(i => i !== item.id);
        }
    }

    private checkAll = (check: boolean = true) => {
        this.checkedItems.forEach(item => {
            item.checked = check;
            this.setAllCheckedItems(item);
        });
    }
}
