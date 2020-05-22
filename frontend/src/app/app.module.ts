import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EscolaListComponent } from './escola/escola-list.component';
import { EscolaCreateComponent } from './escola/escola-create-component';
import { TurmaListComponent } from './turma/turma-list.component';
import { TurmaCreateComponent } from './turma/turma-create.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    NgxPaginationModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'escolas', component: EscolaListComponent },
      { path: 'escolas/new', component: EscolaCreateComponent },
      { path: 'turmas', component: TurmaListComponent },
      { path: 'turmas/new', component: TurmaCreateComponent },
    ])
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    EscolaListComponent,
    EscolaCreateComponent,
    TurmaListComponent,
    TurmaCreateComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/