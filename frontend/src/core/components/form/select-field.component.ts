import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ISelectField } from './ISelectField';
import { CommonComponent } from './common-component';

@Component({
  selector: 'select-field',
  templateUrl: './select-field.component.html',
})

export class SelectFieldComponent extends CommonComponent {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() items: ISelectField[];

  constructor(public ngControl: NgControl,
  ) {
    super();
    this.ngControl.valueAccessor = this;
  }
}