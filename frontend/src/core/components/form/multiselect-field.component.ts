import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CommonComponent } from './common-component';

@Component({
  selector: 'multi-select-field',
  templateUrl: './multiselect-field.component.html',
})

export class MultiSelectFieldComponent extends CommonComponent {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: boolean;
  @Input() dataSource: object;
  @Input() closeOnSelect: boolean;
  @Input() searchable: boolean;
  @Input() bindLabel: string;
  @Input() isMultiple: boolean;
  @Input() bindValue: any;

  constructor(public ngControl: NgControl,
  ) {
    super();
    this.ngControl.valueAccessor = this;
  }
}