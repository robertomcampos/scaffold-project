import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CommonComponent } from './common-component';

@Component({
  selector: 'text-field',
  templateUrl: './text-field.component.html',
})

export class TextFieldComponent extends CommonComponent {

  @Input() label: string;
  @Input() placeholder: string;
  @Input() required: boolean;

  constructor(public ngControl: NgControl,
  ) {
    super();
    this.ngControl.valueAccessor = this;
  }
}