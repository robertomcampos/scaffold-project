import { ControlValueAccessor } from '@angular/forms';

export class CommonComponent implements ControlValueAccessor {

  writeValue(obj: any) { }

  registerOnChange(fn: any) { }

  registerOnTouched(fn: any) { }

  setDisabledState?(isDisabled: boolean) { }

}