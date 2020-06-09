import { Component, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { CommonComponent } from './common-component';

@Component({
  selector: 'checkbox-field',
  templateUrl: './checkbox-field.component.html',
})

export class CheckboxFieldComponent extends CommonComponent {

  @Input() label: string;

  constructor(public ngControl: NgControl,
  ) {
    super();
    this.ngControl.valueAccessor = this;
  }
}