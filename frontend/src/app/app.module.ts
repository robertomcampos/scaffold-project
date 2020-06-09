import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { CoreModule } from '../core/core.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EscolaListComponent } from './escola/escola-list.component';
import { EscolaCreateComponent } from './escola/escola-create-component';
import { EscolaEditComponent } from './escola/escola-edit-component';
import { TurmaListComponent } from './turma/turma-list.component';
import { TurmaCreateComponent } from './turma/turma-create.component';

import { Constants } from "../constants";
import { resizeFrame } from "./services/resizeFrame.js";

@NgModule({
  imports: [
    BrowserModule,
    HammerModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
    }),
    RouterModule.forRoot([
      { path: '', component: EscolaListComponent },
      { path: 'escolas', component: EscolaListComponent },
      { path: 'escolas/:id', component: EscolaEditComponent },
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
    EscolaEditComponent,
    TurmaListComponent,
    TurmaCreateComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private router: Router) {

    if (Constants.IS_CANVAS_PROJECT) {
      window.parent.postMessage({
        type: 'Initiated',
      }, Constants.PARENT_DOMAIN);
    }

    this.router.events.subscribe((value) => {
      if (value instanceof NavigationEnd) {
        if (Constants.IS_CANVAS_PROJECT) {
          window.parent.postMessage({ type: 'UpdateURL', path: `#ProjetoNovo${value.url}` },
          Constants.PARENT_DOMAIN);
          resizeFrame();
        }
      }
    });

    window.addEventListener("message", (event: any) => this.receiveMessage(event), false);
  }

  receiveMessage(event: any) {
    if ('https://localhost:44326/'.startsWith(event.origin) && event.data) {
      localStorage.setItem('usuario', JSON.stringify(event.data));
    }
  }
}
