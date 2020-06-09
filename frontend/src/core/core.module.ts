import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GridComponent } from './components/grid/grid.component';
import { TextFieldComponent } from './components/form/text-field.component';
import { SelectFieldComponent } from './components/form/select-field.component';
import { EmailFieldComponent } from './components/form/email-field.component';
import { CheckboxFieldComponent } from './components/form/checkbox-field.component';
import { MultiSelectFieldComponent } from './components/form/multiselect-field.component';

@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    GridComponent,
    TextFieldComponent,
    SelectFieldComponent,
    EmailFieldComponent,
    CheckboxFieldComponent,
    MultiSelectFieldComponent
  ],
  exports: [
    GridComponent,
    TextFieldComponent,
    SelectFieldComponent,
    EmailFieldComponent,
    CheckboxFieldComponent,
    MultiSelectFieldComponent
  ]
})
export class CoreModule {
}
