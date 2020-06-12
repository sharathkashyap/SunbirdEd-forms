import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownsComponent } from './dropdowns/dropdowns.component';
import { FormComponent } from './form/form.component';
import { CommonFormElementsComponent } from './common-form-elements.component';
import { TextboxComponent } from './textbox/textbox.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';


@NgModule({
  declarations: [CommonFormElementsComponent, DropdownsComponent, FormComponent, TextboxComponent, TextareaComponent, CheckboxComponent],
  imports: [CommonModule],
  exports: [CommonFormElementsComponent , DropdownsComponent, FormComponent]
})
export class CommonFormElementsModule { }
