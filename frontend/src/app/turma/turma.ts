import { Escola } from "../escola/escola";

export interface ITurmaRequest {
    id: number;
    escolaId: number;
    name: string;
    escola: Escola;
    createdDate: Date;
}

export interface ITurmaResponse {
    name: string;
    escolaId: number;
}

export interface ITurmaGrid {
    name: string;
    nameEscola: string;
    createdDate: Date;
}


