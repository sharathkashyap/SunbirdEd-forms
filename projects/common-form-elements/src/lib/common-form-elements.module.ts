import { NgModule } from '@angular/core';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [CommonFormElementsComponent, DropdownComponent, TextboxComponent, TextareaComponent, CheckboxComponent],
  imports: [
  ],
  exports: [CommonFormElementsComponent]
})
export class CommonFormElementsModule { }
