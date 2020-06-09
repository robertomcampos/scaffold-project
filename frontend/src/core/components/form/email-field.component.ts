import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CommonComponent } from './common-component';

@Component({
  selector: 'email-field',
  templateUrl: './email-field.component.html',
})

export class EmailFieldComponent extends CommonComponent {

  @Input() label: string;
  @Input() required: boolean;
  @Input() placeholder: string;

  constructor(public ngControl: NgControl,
  ) {
    super();
    this.ngControl.valueAccessor = this;
  }
}