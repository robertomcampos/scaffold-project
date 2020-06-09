export interface IGridColumnDef {
    headerName: string;
    field: string;
    render: () => any;
}

export interface IGridRowData {
    itemsPerPage: number,
    currentPage: number,
    totalItems: number,
    items: any[],
}

export interface IGridCheckedItem {
    id: any,
    checked: boolean,
}
